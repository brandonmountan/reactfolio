import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselImage1 from "../../components/images/fam.jpg";
import CarouselImage2 from "../../components/images/beerfest.jpg";
import CarouselImage3 from "../../components/images/dogs.jpg";
import "./styling/About.css";

function About() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body class="p-3">
              My name is Brandon Mountan. I was born and raised in Great Falls,
              Montana. My dad worked for the railroad and my mom was a
              registered nurse and they are both happily retired. I have one
              sister who is an attending physician in Denver, CO. I went to
              college at Montana State University-Bozeman. I obtained a
              Bachelor's degree in Cell Biology and Neuroscience. After college,
              I obtained EMT-Basic certification and moved to Salt Lake City,
              Utah where I began a career in health care in various Emergency
              Departments throughout the valley. I currently hold EMT-Paramedic
              certifcation and work the the Emergency Department at University
              of Utah Hospital. My thirst for knowledge led me to complete a 24
              week Full-Stack Coding Bootcamp through the Univsersity. Those 24
              weeks opened my eyes to a new world that I am greatly motivated to
              start a career in. I currently live in Holladay, Utah with my
              wife, two dogs, and one newborn baby boy. Work and Family keep me
              very busy but on the rare occasion that I have time to myself, I
              enjoy golfing and playing video games.
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img src={CarouselImage1} text="First slide" />
              <Carousel.Caption>
                <h3>Family</h3>
                <p>
                  Zaida and Everett.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={CarouselImage2} text="Second slide" />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={CarouselImage3} text="Third slide" />
              <Carousel.Caption>
                <h3>Nala and Remy</h3>
                <p>
                  doods.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  );
}

export default About;
