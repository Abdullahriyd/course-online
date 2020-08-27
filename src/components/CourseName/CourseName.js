import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CourseName.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const CourseName = (props) => {
    const {name,price,students} = props.e ;

    return (
             <div className='course-area'>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>{students} Students Enrolled</p>
                <Button variant='success' onClick={()=>props.handleAddCourse(props.e)}>
                    <FontAwesomeIcon icon={faShoppingCart} className='font' style={{marginRight:'10px'}}/>
                         Enroll Now</Button>
             </div>  
    );
};

export default CourseName;