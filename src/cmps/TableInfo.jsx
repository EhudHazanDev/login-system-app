import React from 'react'
import { ProjectPreview } from "../cmps/ProjectPreview";

export const TableInfo = ({projects}) => {
  return (
    <div >
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
          (<ProjectPreview key={project.id} project={project} />)
        )
      }
    </div>
  )
}
