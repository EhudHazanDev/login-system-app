import React , {useState, useEffect} from 'react'
import {ProjectPreview} from '../cmps/ProjectPreview';

export const UserProjects = ({projects}) => {

  const [average, setAverage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  let sum = 0;
  let amountOfProjects = 0;
  let projectsInDadeline = 0;
  let avg = 0;

  useEffect(() => {
    projects.map((project) => { 
    calculateAVG(project.score);
    if(project.madeDadeline) calculatePercentage();
    })
  }, [])
  const calculateAVG = (score) => {
    amountOfProjects++;
    sum += score;
    avg = sum/amountOfProjects;
    setAverage(avg);
  }
  const calculatePercentage = () => {
    projectsInDadeline++;
    let calculate = projectsInDadeline/amountOfProjects;
    setPercentage(calculate);
  }
  return (
    <div className="userProjects">
      <div className="AvgAndPercentage">
        <h1>AVG:</h1>
        <p>{average}</p>
        <h1>Percentage of projects ended by the dadeling:</h1>
        <p>{percentage}</p>
      </div>
      <div className="headers">
        <h1>Id:</h1>
        <h1>Name:</h1>
        <h1>Score:</h1>
        <h1>Duration In Days:</h1>
        <h1>Bugs Count:</h1>
        <h1>Made Dadeline:</h1>
        <h1>Conclusion:</h1>
      </div>
      <br></br>
      {
        projects.map((project) =>
        (<ProjectPreview key={project.id} project={project}/>)
        )
      }
    </div>

  )
}
