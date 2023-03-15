import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      {/* <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="../src/assets/photos/Slider4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="../src/assets/photos/slider2.jpeg"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../src/assets/photos/slider3.jpg"
          
        />
        
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;