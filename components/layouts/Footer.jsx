import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const Footer = () => {
  return (
    <div>
      <>
        <Container fluid>
          <Row>
            <footer>
              
                <div className="reached">
                <h4 className="cntus"> Contact us:<a className="fta" href="tel:+4733378901">+47 333 78 901</a></h4>
               <h4 className="cntus"> Email at:<a className="fta1" href="mailto:hafsa@yahoo.com">hafsa@live.com</a></h4>
                 
                 

                </div>

                 <div className="copyrights">  
                <h4 className="h4rg">Copyrights: Hafsa  &copy;</h4>
</div>
              
            </footer>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default Footer;
