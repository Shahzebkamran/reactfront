

import React from 'react'

function UsersList(props) {

    return (
 
        <div>

        {props.users && props.users.map(user => {
          return (
            <div key = {user.id}>
          <h2>{user.username}</h2>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.email}</p>

          {/* <div className = "row">
          <div className = "col-md-1">
          <button className = "btn btn-primary" onClick  = {() => editBtn(article)}>Update</button>
          </div>

           <div className = "col">
          <button onClick = {() => deleteBtn(article)} className = "btn btn-danger">Delete</button>
          </div>


          </div> */}

          <hr className = "hrclass"/>
          </div>
          )
        })}

    

    
        
        </div>
    
    )
}

export default UsersList;
