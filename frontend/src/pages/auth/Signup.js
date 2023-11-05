import React from 'react'
import './styles/Signin.scss';
import { Button, Row, Col, Form } from "react-bootstrap";

function Signup() {


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
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>UserName </Form.Label>
                                <Form.Control type="text" placeholder="Enter UserName" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicmobile">
                                <Form.Label>Mobile No</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mobile No" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicprofile">
                                <Form.Label>Profile Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter Profile Image" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Terms and Conditions" />
                            </Form.Group>

                            <button variant="primary" className='loginButton'>
                                Signup
                            </button>

                        </Form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup