import React, { useEffect , useState } from 'react'
import { useHistory } from "react-router-dom";
import { UserDetails } from '../cmps/UserDetails';
import { UserProjects } from "../cmps/UserProjects"
import { Loader } from "../cmps/Loader"
import { HttpService } from '../services/generalService/httpService';

export const Info = () => {
  const [projects, setProjects] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const getProject = async () => {
      const data =  await HttpService.get("/info"); 
      setProjects(data);
    }
    const isHasToken = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        history.push(`/`);
      }
    }
    isHasToken();
    getProject();
  }, []);

  return (
    <div>
      Info users
      <UserDetails/>
      {!projects && <Loader/>}
      {projects && <UserProjects projects={projects}/>}
    </div>
  )
}