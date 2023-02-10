import React from 'react'
import {ProjectPreview} from '../cmps/ProjectPreview';

export const UserProjects = ({projects}) => {
  return (
    <div className="userProjects">
      <div className="headers">
        <h1>id:</h1>
        <h1>name:</h1>
        <h1>score:</h1>
        <h1>duration In Days:</h1>
        <h1>bugs Count:</h1>
        {/* <h1>made Dadeline:</h1> */}
      </div>
      <br></br>
      {
        projects.map((project) =>
        (<ProjectPreview key={project.id} project={project} projects={projects} />
        ))}
    </div>
  )
}
