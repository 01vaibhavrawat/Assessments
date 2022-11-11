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

export default function HowItWorks(argument) {


  return(
      <div id="HowItWorks">
        <h1> How it works? </h1>
          <Row id="HowItWorks-row">
            <Col sm="4">
              <Card
                body
                className="my-2"
              >
              <img
                alt="Sample"
                src="https://picsum.photos/300/200"
              />
                <CardTitle tag="h5">
                  Special Title Treatment
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button color="primary">
                  Go somewhere
                </Button>
              </Card>
              </Col>
              <Col sm="4">
              <Card
                body
                className="my-2"
              >
              <img
                alt="Sample"
                src="https://picsum.photos/300/200"
              />
                <CardTitle tag="h5">
                  Special Title Treatment
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button color="primary">
                  Go somewhere
                </Button>
              </Card>
            </Col>
            <Col sm="4">
              <Card
                body
                className="my-2"
              >
              <img
                alt="Sample"
                src="https://picsum.photos/300/200"
              />
                <CardTitle tag="h5">
                  Special Title Treatment
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button color="primary">
                  Go somewhere
                </Button>
              </Card>
            </Col>
            </Row>
            </div>
    )
}