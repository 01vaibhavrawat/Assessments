import { Row, Col} from 'reactstrap';

export default function Testimonials() {
		const arr = [
		
		{
			src: "https://i.insider.com/5a80a178433c01ee018b46d9?width=1000&format=jpeg&auto=webp",
			h2: "Crystal Peng",
			h4: "",
			blockquote: "It's a very great program, my guide has already helped with my confidence in the short amount of time I’ve been seeing him and he is very encouraging.",
		},
		{
			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-eoRSEqxTfTmDfHZ_GAfAioeqssZWxp6IA&usqp=CAU",
			h2: "Jeffrey Parker",
			h4: "England",
			blockquote: "My guide is a very relatable person who displays incredible empathy and understanding. Conversations are easy and there is no feeling of judgment whatsoever.",
		},
		{
			src: "https://i.insider.com/5a80a1c356019a1a008b4585?width=800&format=jpeg&auto=webp",
			h2: "Lydia Dobbins",
			h4: "USA",
			blockquote: "My guide challenges my mindsets, she listens and provides ways to tackle issues. She is so good! I am getting so much out of my therapy sessions with her.",
		},
		]
	return(
		<div id="Testimonials">
    	<h1 id="testimonials-header">Read our reviews</h1>
		<Row>	
		{arr.map((obj)=>{
			return(
		<Col>
		<figure class="snip1390">
		  <img src={obj.src} alt="profile-sample3" class="profile" />
		  <figcaption>
		    <h2>{obj.h2}</h2>
		    <h4>{obj.h4}</h4>
		    <blockquote>{obj.blockquote}</blockquote>
		  </figcaption>
		</figure>
		</Col>
				)
		})
	}
		</Row>
		</div>
		)

}