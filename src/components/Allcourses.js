import React, { useState } from "react";
import Course  from "./course";

const AllCourse=()=>{
    const [courses,setCourse]=useState([
        {title:"java",description:"demo text1"},{title:"java3",description:"demo text2"},{title:"java6",description:"demo text3"},{title:"java3",description:"demo text4"},{title:"java21",description:"demo text5"},{title:"java34",description:"demo text5"}
    ])
    return(
        <div className="text-center">
            <h1>All courses</h1>
            <p>List of courses</p>
            {
                courses.length>0?courses.map((item)=>(
                    <Course course={item}/>
                )):"No courses"
            }
        </div>
    );
};
export default AllCourse;