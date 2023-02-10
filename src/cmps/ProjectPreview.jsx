import React from 'react'

export const ProjectPreview = (props) => {
  return (
    <div className="projectPreview">
        <p>{props.project.id}</p>
        <p>{props.project.name}</p>
        <p>{props.project.score}</p>
        <p>{props.project.durationInDays}</p>
        <p>{props.project.bugsCount}</p>
        {/* <p>{props.project.madeDadeline}</p> */}
    </div>
  )
}
