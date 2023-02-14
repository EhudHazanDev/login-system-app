import React, {useState,useEffect} from 'react'

export const StatisticsInfo = ({projects}) => {

  const [average, setAverage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  let sum = 0 , amountOfProjects = 0,projectsInDadeline = 0, avg = 0;

  useEffect(() => {
    projects.map((project) => {
      calculateAVG(project.score);
      if (project.madeDadeline) calculatePercentage();
    })
  }, [])

  const calculateAVG = (score) => {
    amountOfProjects++;
    sum += score;
    avg = sum / amountOfProjects;
    setAverage(avg);
  }

  const calculatePercentage = () => {
    projectsInDadeline++;
    const calculate = projectsInDadeline / amountOfProjects;
    setPercentage(calculate);
  }

  return (
    <div className="statistics">
      <div className="avg">
        <h1>The average score:</h1>
        <p>{average}</p>
      </div>
      <div className="percenteg">
        <h1>The percentage of projects met the deadline:</h1>
        <p>{percentage}</p>
      </div>
    </div>
  )
}
