import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProjectCard = ({ title, text, projectLink }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <a href={projectLink}>
            <Button variant="primary">Go somewhere</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
