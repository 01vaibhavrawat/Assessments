import {
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    Button,
    ListGroupItem,
    ListGroup,
     } from 'reactstrap';

export default function Pricing() {

  const text = [
  {
    title: "Special Title Treatment",
    text: "With supporting text below as a natural lead-in to additional content.",
    button: "Go somewhere",
    arr : [
    "An item",
    "Special Title Treatment",
    "Special Title Treatment Special Title Treatment",
    "Special Title Treatment",
    ]
  },
  {
    title: "Special Title Treatment",
    text: "With supporting text below as a natural lead-in to additional content.",
    button: "Go somewhere",
    arr : [
    "An item",
    "Special Title Treatment",
    "Special Title Treatment Special Title Treatment",
    "Special Title Treatment",
    "Special Title",
    "Special Title Treatment",
    "Special Title Treatment",
    ]
  }]


  return(
    <div id="pricing-div">
    <h1 id="pricing-header">Pricing</h1>
    <Row id="pricing">

     {text.map((obj, index)=>{
       return(
        <Col id="pricing-col" sm="6" key={index}>
          <Card body>
            <CardTitle tag="h5">
              {obj.title}
            </CardTitle>
            <CardText>
              {obj.text}
            </CardText>
            <Button className="pricing-button" color="primary">
              {obj.button}
            </Button>
            <ListGroup flush>
             { obj.arr.map((item, index)=>{
                return(
              <ListGroupItem id="pricing-icon-text" key={index}>
                <img className="check" src={require('../images/check.png')}/>
                <p>{item}</p>
              </ListGroupItem>
              )
              })
            }
            </ListGroup>
          </Card>
        </Col>

        )
    })}
      </Row>
      </div>
    )
}