import React from 'react'

export const ProjectPreview = ({project}) => {

  const getColor = () => {
    if (project.score > 90) return 'beforeLimit';
    if (project.score > 70) return 'primeText';
    return 'overLimit';
  }

  const isNeedRetest = () => {
    if (project.score >= 70 && project.score <= 90 && project.madeDadeline === true)
      return 'Need to retest - project is not good';
    if (project.score < 70)
      return 'Need to take the course again';
    return 'well done - you pass the course';
  }

  const getRetestColor = () => {
    if (project.score >= 70 && project.score <= 90 && project.madeDadeline === true)
      return 'beforeLimit';
    if (project.score < 70)
      return 'overLimit';
    return 'beforeLimit';
  }

  return (
    <div className="projectPreview">
      <p>{project.id}</p>
      <p>{project.name}</p>
      <p className = {getColor()}> {project.score}</p>
      <p>{project.durationInDays}</p>
      <p className = {project.bugsCount>50 ? 'overLimit' : 'beforeLimit' }>{project.bugsCount}</p>
      <p>{project.madeDadeline ? 'Yes' : 'False'}</p>
      <p className ={getRetestColor()}>{isNeedRetest()}</p>
    </div>
  )
}
