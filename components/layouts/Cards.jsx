import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalJoin from './ModalJoin';
export const Cards = ({login}) => {
  return (

    <>
    
    <Container>
    <div className='exediv'><h1 className='exeh1'>Exercise Activities</h1></div>   
   <Row>
    <section className='sec1'>
        <h2 >Explore our Exercise <br></br>Activities</h2>
        <p className='shadow'>One step away to join these amazing Activities <br>
        </br>
            Just Sign-up and grab this finest opportunity.! <br>
            </br>
            Explore more...
        </p>
        <img className='rn' src='../src/assets/photos/istockphoto-1131136362-170667a.jpg'></img>
    <Col sm>
<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="../src/assets/photos/runnersguidegym-2.jpg" />
 <Card.Body>
   <Card.Title>Run</Card.Title>
   <Card.Text>
   A beginner to exercise should start with brisk walking, progress to jogging and work up to running.
   </Card.Text>
 </Card.Body>
 <Card.Body>
   <Card.Link href="#"><ModalJoin /></Card.Link>
 </Card.Body>
</Card>
</Col>


    </section>
     
     <section className='sec2'>
     <h2 >Explore our Exercise <br></br>Facilities</h2>
        <p className='shadow'>We're glad you here, <br>
        </br>
            to become a part of our membership join us <br>
            </br>
          
        </p>
     <img className='rn' src='../src/assets/photos/istockphoto-1213656577-612x612.jpg'></img>

     <Col>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/photos/bicycle.jpg" />
      <Card.Body>
        <Card.Title>Bicycle Ride</Card.Title>
        <Card.Text>
        Cycling improves strength, balance and coordination. It may also help to prevent falls and fracture.
        </Card.Text>
      </Card.Body>
   
      <Card.Body>
        <Card.Link href="#"><ModalJoin /></Card.Link>
      </Card.Body>
    </Card>
  
     </Col>
     </section> 

     <section className='sec3'> 
     <h2 >Keep Tracking</h2>
        <p className='shadow'>Burn your calories <br>
        </br>
            Keep doing exercise, and track your progress <br>
            </br>
            
        </p>
     <img className='rn' src='../src/assets/photos/Is-it-okay-to-swim-after-going-to-the-gym.jpg'></img>

     <Col>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/photos/swim1.jpg" />
      <Card.Body>
        <Card.Title>Swim</Card.Title>
        <Card.Text>
        Swimming· keeps your heart rate up but takes some of the impact stress off your body. 
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#"><ModalJoin /></Card.Link>
      </Card.Body>
    </Card>
   
     
     </Col>
     
     </section>
 
      <section className='sec4'>
      <h2>We offer multiple features to <br></br>addon your activities</h2>
        <p className='shadow'>To know more activities you have to Sign-in <br>
        </br>
            A new member? no problem scroll up and Sign-up <br>
            </br>
        </p>
      <img className='rn' src='../src/assets/photos/cardio-workouts-for-weight-loss-9ab91dc826a74d0788ada9e3aebd9ebb.jpg'></img>

      <Col sm>

<Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="../src/assets/photos/walking.jpg" />
 <Card.Body>
   <Card.Title>Walk</Card.Title>
   <Card.Text>
   Walking is a great way to improve or maintain your overall health. Just 30 minutes every day can increase cardiovascular fitness, strengthen bones
   </Card.Text>
 </Card.Body>
 
 <Card.Body>
   <Card.Link href="#"><ModalJoin /></Card.Link>
 </Card.Body>
</Card>

</Col>

      </section>
    
    <section className='sec5'>
    <h2>You almost here</h2>
        <p className='shadow'>Keep yourself fit and balance <br>
        </br>
          Just a one step to go <br>
            </br>
          
        </p>
    <img className='rn' src='../src/assets/photos/vzgliad-poza-fitnes-muscle-myshtsy-press-atlet-trenazhery--2.jpg'></img>

    <Col sm>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/assets/photos/hike.jpg" />
      <Card.Body>
        <Card.Title>Hike</Card.Title>
        <Card.Text>
        hiking · Reduces risk of heart disease · Lowers blood pressure · Combats diabetes · Tackles obesity · Reduces anxiety and depression.

        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#"><ModalJoin /></Card.Link>
      </Card.Body>
    </Card>
  
     </Col>


    </section>

   </Row>
 </Container>
    
    </>






  )
}



