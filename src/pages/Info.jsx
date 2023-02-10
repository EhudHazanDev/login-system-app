import React, {useEffect , useState} from 'react'
import { useHistory } from "react-router-dom";
import {UserDetails} from '../cmps/UserDetails';
import {UserProjects} from "../cmps/UserProjects"
import { HttpService } from '../services/generalService/httpService';

export const Info = () => {
  let history = useHistory();
  const [projects, setProjects] = useState(null);
  const isHasToken = () => {
    let token = localStorage.getItem('token');
    if (!token) {
      history.push(`/`);
    }
  }

  useEffect(() => {
    const getProject = async () => {
      const data =  await HttpService.get("/info"); 
      setProjects(data);
    }
    isHasToken();
    getProject();
  }, []);

  return (
    <div>
      Info users
      <UserDetails/>
      {projects && <UserProjects projects={projects}/>}
    </div>
  )
}