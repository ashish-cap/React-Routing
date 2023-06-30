import React from 'react';
import Student from './student.json';
import {useParams} from 'react-router-dom';
const User = () =>{
    const params=useParams();
    const {id} = params;
    return(
        <div className="card">
        <div className="top">
          <h2 className="name">{Student[id].name}</h2>
          <img className="circle-img" src={Student[id].imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{Student[id].phone}</p>
          <p className="info">{Student[id].name}</p>
        </div>
      </div>
    )
}

export default User;