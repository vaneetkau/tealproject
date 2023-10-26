import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  
//import img1 from './img1.jpg';  
function GroupExample() {  
    
  return (  
    
    <div className="App">  
   
   <Container className='p-4'>  
     <Row>  
     
 { [  
  'Primary',  
  'Secondary',  
  'Success',  
  'Danger',  
   
].map((variant, idx) => (  
  <Card  
   style={{width:"20%"}}  
    className="m-2"  
  >  
    <Card.Header>News</Card.Header>  
    <Card.Body>  
      <Card.Title>Product Description </Card.Title>  
      <Card.Text>  
      Lorem ipsum, or lipsum as it is sometimes known </Card.Text>  
    </Card.Body>
    <Card.Footer>
         <small className="text-muted">Last updated 3 mins ago</small>
         </Card.Footer>  
  </Card>  
))}  
</Row>  
</Container>  
    </div>  
  );  
}  
export default GroupExample;  