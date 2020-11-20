import React from 'react';
const User = ({user}) =>
    <div className="single-user" key={user.id}>
        <h4>{user.first_name} {user.last_name}</h4>
        <p>{user.email}</p>
    </div>
export default User;