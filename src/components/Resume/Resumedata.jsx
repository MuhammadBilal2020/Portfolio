import React from "react";
import Card from "react-bootstrap/Card";

function Resumedata() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          <h2 className="purple">Projects </h2>
            <span>Designed a restaurant website using HTML, CSS, and Bootstrap, focusing on a clean, modern layout with menu and offers.</span>
            <br />
            <br />
            <span>Built a PriceOye clone with HTML, CSS, and Bootstrap, recreating the platform's responsive design and product features.</span>
            <br />
            <br />
            <span>Developed a full-stack PostAd website using HTML, CSS, Bootstrap, JavaScript, and Firebase for user authentication and ad posting.</span>
            <br />
            <br />
            <span>Built a blogging platform with React and Firebase for authentication and dynamic content management.</span>
            <br />
            <br />
            <span>For more watch my projects section.</span>
            



            <br />
            <br />

            <h2 className="purple">Hackathons </h2>
            <span>Designed a Burger King website clone using HTML and CSS, focusing on responsive, brand-specific design.</span>
            <br />
            <br />
            <span>Developed a Blogging Website using HTML, CSS, JavaScript, and Firebase, integrating front-end design with backend functionality.

</span>
            

           

          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Resumedata;