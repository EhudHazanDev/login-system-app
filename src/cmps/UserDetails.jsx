import React, { useEffect, useState } from 'react'

export const UserDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const details = JSON.parse(localStorage.getItem('personalDetails'));
    setUser(details);
  }, [])


  return (
    <div className="userDetails">
      {user && <div>
        <p >{user.name}</p>
        <p>{user.Team}</p>
        <p>{user.joinedAt}</p>
        <img src={user.avater} alt="Failed to load"/>  
      </div>}
    </div>
  )
}
