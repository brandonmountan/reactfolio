import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Portfolio() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="../images/daniele-colucci-OtXJhYjbKeg-unsplash.jpg" />
        <Card.Body>
          <Card.Title>Post Game</Card.Title>
          <Card.Text>
            The final project of the boot camp.
          </Card.Text>
        </Card.Body>
        <Card.Link href="./resume.pdf">link coming soon...</Card.Link>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Rentopia</Card.Title>
          <Card.Text>
            This was a group project with an e commerce website.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Link href="https://salty-temple-87367-87002835adcc.herokuapp.com/">link</Card.Link>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>MarsMadness</Card.Title>
          <Card.Text>
            This was a group project
          </Card.Text>
        </Card.Body>
        <Card.Link href="https://starlit-mermaid-2652a3.netlify.app/">link</Card.Link>
      </Card>
    </CardGroup>
  );
}

export default Portfolio;