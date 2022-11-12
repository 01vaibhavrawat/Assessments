import {
  CardTitle,
  Card,
  CardText,
  Col,
  CardImg,
  CardBody,
  Collapse,
  Button,
  Row
} from 'reactstrap';
import img1 from '../images/assessment1.jpg';
import img2 from '../images/resources2.jpg';
import img3 from '../images/guide2.png';

export default function HowItWorks(argument) {

  const content = [
  {
    src: img1,
    title: 'Assessment',
    text: `In the first step, you complete an assessment, 
    designed to find out the root causes of your problems, 
    then our team will review your answers, and then, 
    we will discuss the results with you.`,
  },
  {
    src: img2,
    title: 'Resources',
    text: `We will provide you with resources, divided into daily pieces of text and tasks. 
    By reading it and completing the tasks, that'll take around 10 minutes every day, 
    you will become a better version of yourself every day.`,
  },
  {
    src: img3,
    title: 'Guidance',
    text: `The most important thing for walking out of something is to get the guidance 
    of someone who has already walked that path, that's exactly what we provide, 
    we connect you with people who have overcome the same problem as you have.`,
  },
  ]


  return(
      <div id="HowItWorks">
        <h1> How it works? </h1>
          <Row id="HowItWorks-row">
          {content.map((obj, index)=>{
              return(
                       <Col sm="4" key={index}>
              <Card
                body
                className="my-2"
              >
              <img
                src={obj.src}
              />
                <CardTitle tag="h5">
                  {obj.title}
                </CardTitle>
                <CardText>
                  {obj.text}
                </CardText>
                <Button color="primary">
                  Learn more
                </Button>
              </Card>
              </Col>
              )
          })}
           
            </Row>
            </div>
    )
}