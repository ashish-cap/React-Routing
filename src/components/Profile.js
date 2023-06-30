import React from 'react';
import Students from './student.json';
import {Link} from 'react-router-dom';
function Profile(){
    return(
        <div className='Profile'>
            <h1>My Friend List</h1>
                {Students && Students.map((student,index) => {
                   return(
                    <div key={student.id}>
                       <Link to={"/user/"+index} style={{marginRight:'10px'}}>{student.id}</Link>
                       {student.name}
                    </div>
                   ) 
                })}
        </div>
    )
}

export default Profile;