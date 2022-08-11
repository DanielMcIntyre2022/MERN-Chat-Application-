import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import './StylePages/Signup.css';
import Robot from "../assets/robot.jpg";

const upLoadImage = () => {

}

function Signup() {
  return (
     <Container>
      <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{ width: "80%", maxWidth: 500 }}>
            <h1 className='text-center'>Create Account</h1>
            <div className="profile-pic-container">
              <img src={Robot} className='sign-up-pic'/>
              <label htmlFor='image-upload' className='image-upload-label'>
                <i className='fas fa-plus-circle add-picture-icon'></i>
              </label>
              <input type="file" id="image-upload" hidden accept='image/png, image/jpg' onChange={ upLoadImage} />
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter name" />
            </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
            </Button>
         </Form> 
        </Col>  
          <Col md={5} className="signup-form"></Col>
      </Row>
    </Container>
  )
}

export default Signup