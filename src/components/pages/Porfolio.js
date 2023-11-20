import Card from 'react-bootstrap/Card';
import Pthree from '../images/project3img1.PNG';
import './styling/Portfolio.css'

function Portfolio() {
  return (
    <>
      <Card>
        <a href='https://blooming-mesa-22889-acf656e63fb1.herokuapp.com/'>
        <Card.Img class='p-3' variant="top" src={Pthree} />
        </a>
        <Card.Body>
          <Card.Text>
            Final bootcamp project. A social media and blog website built with React.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Portfolio;