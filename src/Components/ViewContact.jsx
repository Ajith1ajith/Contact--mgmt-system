import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';




const ViewContact = () => {

    const[selectedId,setSelectedId]=useState(-1);

    const navigate = useNavigate();

    const location = useLocation();

    const[users,setUsers]=useState(location.state?.users || []);

    const[selectedUser,setSelectedUser]=useState({
      contactName:"",
      contactEmail:"",
      contactPhoneno:"",
      contactPlace:""
    });


    useEffect(()=>{
      },[users]);

function handleBack(){
  navigate("/", {
    state: { users: users }
  });
}

    function handleUpdate(id){
      setSelectedId(id);
      const selectUser=users.filter((user,index)=>{
        if (index===id){
          return user;
        }
      
    })
    setSelectedUser(selectUser[0]);
    
  }
  function handleChange(event){
    setSelectedUser({...selectedUser,[event.target.name]
      :event.target.value});
    
  }
     function handleCancel(){
      setSelectedId(-1);
    }

    function handleSave(){
      const updatedUsers=users.map((user,index)=>{
        if(index===selectedId){
          return selectedUser;
        }
        else{
          return user;
        }
      })

      setUsers(updatedUsers);
      setSelectedId(-1);
     // console.log(updatedUsers);
    }

    function handleDelete(id){
      const updatedUsers=users.filter((user,index)=>{
        if(index!==id){
          return user;
        }
      });
      setUsers(updatedUsers);
      setSelectedId(-1)


    }

  return (
    <div className='text-center'>
      <h1 >view All Contact</h1>
  <Button
    variant="warning"
    type='button'
    onClick={handleBack}
   
  >
   Add Contact
  </Button>


      <Table striped bordered hover>
      
       <thead>
        <tr>
            <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>PhoneNo</th>
          <th>Place</th>
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
  {
    users.map((user, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>

          <td>{ 
          selectedId===index?
          <Form.Control 
          type="text"
          onChange={handleChange}
          name='contactName'
          value={selectedUser.contactName}
          placeholder="Enter Your Name" />
          :user.contactName
          }</td>

          <td>{
          selectedId===index?
            <Form.Control 
            type="email" 
            onChange={handleChange}
            name='contactEmail'
            value={selectedUser.contactEmail}
            placeholder="Enter Your Email" /> 
            :user.contactEmail}</td>

            <td>{
          selectedId===index?
            <Form.Control 
            type="number" 
            onChange={handleChange}
            name='contactPhoneno'
            value={selectedUser.contactPhoneno}
            placeholder="Enter Your Phoneno" /> 
            :user.contactPhoneno}</td>


    <td>{   
    selectedId===index?
    <Form.Control 
    type="text"
    onChange={handleChange} 
    name='contactPlace'
    value={selectedUser.contactPlace}
    placeholder="Enter Your Place" />
    :
    user.contactPlace
                      
   }</td>
           <td>
  {selectedId === index ? (
    <Button variant='success'onClick={handleSave}>Save</Button>
  ) : (
    <Button variant='secondary' onClick={() => handleUpdate(index)}>Update</Button>
  )}
</td>
<td>
  {selectedId === index ? (
    <Button variant='info'onClick={handleCancel}>Cancel</Button>
  ) : (
    <Button variant='danger'onClick={()=>handleDelete(index)}>Delete</Button>
  )}
</td>

          

        </tr>
      );
    })
  }
</tbody>


      </Table>
    </div>
  )
}


export default ViewContact;