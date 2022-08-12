import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import './StylePages/Signup.css';
import Robot from "../assets/robot.jpg";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Signup() {

  // create state to store the upload of the user image //

  const [image, setImage] = useState(null);
  const [uploadingImg, setUpLoadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  // create functions to  handle the uploading of the user image //
  
  const validateImg = (e) => {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("Max file size is 1MB");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file))
    }
  }

  
  // create state to store the user inputs on the form //

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // create onChange functions for user inputs //
  
  const userNameChange = (e) => {
    setUserName(e.target.value);
  }
  const emailNameChange = (e) => {
    setUserEmail(e.target.value);
  }
  const passwordChange = (e) => {
    setUserPassword(e.target.value);
  }

  // create a function to handle the submission of the form with state data //
  async function uploadImg() {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'chat-app-photo');
    try {
      setUpLoadingImage(true);
      let res = await fetch('https://api.cloudinary.com/v1_1/da14xvzmz/image/upload', {
        method: 'POST',
        body: data
      })
      const urlData = await res.json();
      setUpLoadingImage(false);
      return urlData.url;
    } catch (err) {
      setUpLoadingImage(false);
      console.log(err);
    }
  }

  async function handleSignUp(e) {
    e.preventDefault();
    if (!image) return alert("Please upload your profile picture :)");
    const url = await uploadImg(image);
    console.log(url);
  }

  return (
     <Container>
      <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{ width: "80%", maxWidth: 500 }} onSumbit={handleSignUp}>
            <h1 className='text-center'>Create Account</h1>
            <div className="profile-pic-container">
              <img src={imagePreview || Robot} className='sign-up-pic' alt='robot'/>
              <label htmlFor="image-upload" className="image-upload-label">
                 <i className="fas fa-plus-circle add-picture-icon"></i>
              </label>
               <input type="file" id="image-upload"  accept="image/png, image/jpeg" onChange={validateImg} />
              </div>
            <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={userNameChange} value={userName} />
            </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={emailNameChange} value={userEmail} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={passwordChange} value={userPassword} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Account
            </Button>
        <div className="py-4">
              <p className='text-center'>
                Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
         </Form> 
        </Col>  
          <Col md={5} className="signup-form"></Col>
      </Row>
    </Container>
  )
}

export default Signup