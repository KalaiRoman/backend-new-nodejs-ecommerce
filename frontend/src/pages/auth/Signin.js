import React from 'react'
import './styles/Signin.scss';
import { Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Signin() {

    const navigate = useNavigate();

    const ChangePath = () => {
        navigate("/signup")
    }


    return (
        <div className='main-sigin-section'>
            <div className='inside-sigin-section'>
                <div className='left-sigin-section'>
                    <img src="https://somherbalspecialities.com/wp-content/uploads/2019/09/delivery-service.png" alt="no image"
                        className='user-logo'
                    />
                </div>
                <div className='right-sigin-section'>
                    <div className='inside'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>UserName or Mobile No</Form.Label>
                                <Form.Control type="text" placeholder="Enter UserName or Mobile No" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <button variant="primary" className='loginButton'>
                                Submit
                            </button>

                        </Form>

                        <div className='mt-3 text-danger cursor-pointer' onClick={ChangePath}>
                            New to E-Commerce? Create an account
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin