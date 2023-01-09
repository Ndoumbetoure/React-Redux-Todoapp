import React from 'react';
import Card from 'react-bootstrap/Card';


function Footer() {

    
    const stylefooter = {textAlign : "center", marginTop:"100px", marginBottom: '50px', color:'#ffc300'}

  return (
       
    <Card className="text-center" style={stylefooter}>
     
    <Card.Footer className="text-muted"> lpb copyright &copy; Janvier 2023</Card.Footer>

    </Card> 
    
    )
}

export default Footer