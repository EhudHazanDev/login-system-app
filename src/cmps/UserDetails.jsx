import React, { useEffect, useState } from 'react'

export const UserDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let details = JSON.parse(localStorage.getItem('personalDetails'));
    setUser(details);
  }, [])


  return (
    <div className="userDetails">
      {user && <div className="columnHeaders">
        <p >{user.name}</p>
        <p>{user.Team}</p>
        <p>{user.joinedAt}</p>
        {/* <p>{user.avater}</p> */}
      </div>}
    </div>
  )
}
