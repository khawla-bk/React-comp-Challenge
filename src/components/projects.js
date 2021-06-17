import React from "react";
import "../App.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBRow className="projects-container">
      <MDBCol className="project-card">
        <MDBCard>
          <MDBCardImage
            className="CardImage"
            src="https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj1.jpg?raw=true"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">Github Link</a>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className="project-card">
        <MDBCard>
          <MDBCardImage
            className="CardImage"
            src="https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj2.jpg?raw=true"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Project 2</MDBCardTitle>
            <MDBCardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </MDBCardText>
            <p>
              <a href="#">Github Link</a>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className="project-card">
        <MDBCard>
          <MDBCardImage
            className="CardImage"
            src="https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj3.jpg?raw=true"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Project 3</MDBCardTitle>
            <MDBCardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </MDBCardText>
            <p>
              <a href="#">Github Link</a>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className="project-card">
        <MDBCard>
          <MDBCardImage
            className="CardImage"
            src="https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj4.jpg?raw=true"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Project 4</MDBCardTitle>
            <MDBCardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </MDBCardText>
            <p>
              <a href="#">Github Link</a>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
