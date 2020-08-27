import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Course.css';
import CourseName from '../CourseName/CourseName';
import CartName from '../CartName/CartName';

const Course = () => {
    const [course] = useState(fakeData);

     const [cartCourse, setcartCourse] = useState([]);
     
     const handleAddCourse = (course)=>{
        let newCourse = [...cartCourse, course];
        setcartCourse(newCourse); 
    }
    
    return (
        <div className="container">
            <div className="course-container">
                {
                    course.map(e=> <CourseName e={e} key={e.id} handleAddCourse={handleAddCourse}></CourseName>)
                }
            </div>
            <div className="course-cart">
                <CartName addCourse={cartCourse}></CartName>
            
            </div>
        </div>
    );
};

export default Course;