import React, {useEffect , useState} from 'react'
import { useHistory } from "react-router-dom";


export const Info = () => {
  let history = useHistory();
  
  useEffect(() => {
    let token = localStorage.getItem('token');
    if (!token) {
      history.push(`/`);
    }
  }, []);

  return (
    <div>Info users</div>
  )
}