import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  message: '',
}
export default function Footr(props) {

  const Navigate = useNavigate();

  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    const templateParams = {
                name,
                email,
                message
            };
    emailjs
      .send(
        'service_wsqyd68', 'template_k1q1wla', templateParams, 'igzjQsnj1cF-26O7F'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          window.alert('Your message has been sent successfully.')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>HealGratefully.com</h3>
              <p onClick={()=> Navigate('/about')}>
                About Us
              </p>
            </div>
            <div className='contact-item'>
              <p>
                Contact Us
              </p>
            </div>
            <div className='contact-item'>
              <p onClick={()=> Navigate('/login')}>
                Login
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul id="social">
                  <li>
                      <img src={require('../images/facebook.png')} />
                  </li>
                  <li>
                      <img src={require('../images/instagram.png')} />
                  </li>
                  <li>
                      <img src={require('../images/twitter.png')} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2020 HealGratefully.com. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}