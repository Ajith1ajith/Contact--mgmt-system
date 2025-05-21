import React, { useEffect, useState } from 'react';
import { CardHeader, Form, Card, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';



const AddContact = () => {
    const [user, setUser] = useState({
        contactName: "",
        contactEmail: "",
        contactPhoneno: "",
        contactPlace:""
    });

    const navigate = useNavigate();
    const location = useLocation();

    const [users, setUsers] = useState(location.state?.users || []);

    const handleChange = (event) => {
        setUser({ ...user,
             [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsers([...users, user]); 
        setUser({ 
          contactName: "",
          contactEmail: "",
          contactPhoneno:"",
          contactPlace: "" 
        });
    };

    useEffect(() => {
        
    }, [users]);

     const handleClick = () => {
        navigate('/ViewContact', {
            state: { users: users}
        });
     };

    return (
        <div className='w-50  offset-3 mt-5 one'>
       
            <Card className='two'>
                <CardHeader className='three'>
                    <h2>Add Contact List</h2>
                </CardHeader>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="w-50 offset-3 mt-1 mb-2 ">
                            <Form.Label>Contact Name:</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter your name" 
                                value={user.contactName} 
                                name="contactName" 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group className=" w-50 offset-3 mt-1 mb-2 ">
                            <Form.Label>Contact Email:</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter your email" 
                                value={user.contactEmail} 
                                name="contactEmail" 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                         <Form.Group className=" w-50 offset-3 mt-1 mb-2 ">
                            <Form.Label>Contact Phone Number:</Form.Label>
                            <Form.Control 
                                type="number" 
                                placeholder="Enter your phonenumber" 
                                value={user.contactPhoneno} 
                                name="contactPhoneno" 
                                onChange={handleChange} 
                            />
                        </Form.Group>
                        <Form.Group className="w-50 offset-3 mt-1 mb-2 ">
                            <Form.Label>Enter Your Place</Form.Label>
                            <Form.Control 
                                type="text"
                                
                                placeholder="Enter your place" 
                                value={user.contactPlace} 
                                name="contactPlace" 
                                onChange={handleChange} 
                                
                            />
                        </Form.Group>
                        
                        <Card.Footer className='four'>
                            <Button className='six' variant='success' type='submit'>Add Contact</Button>
                        </Card.Footer>
                    </Form>
                    <Button className='col-3  mt-5 five' variant='primary' onClick={handleClick}>View Contact List</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AddContact;