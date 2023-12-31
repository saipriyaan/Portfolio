import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Priyan J K  </span>
            from <span className="purple"> Tamil Nadu, India.</span>
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
  
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Change the focus to see difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sai Priyan J K</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
