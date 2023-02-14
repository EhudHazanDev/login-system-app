import React , {useEffect} from 'react'

export const ProjectPreview = (props) => {
  

  const getColor = () => {
    if (props.project.score > 90) return 'green';
    if (props.project.score > 70) return 'black';
    return 'red';
  }

  const isNeedRetest = () => {
    if (props.project.score >= 70 && props.project.score <= 90 && props.badProject == true)
      return 'Need to retest - project is not good';
    if (props.project.score < 70)
      return 'Need to take the course again';
    return 'well done - you pass the course';
  }

  const isNeedRetestColor = () => {
    if (props.project.score >= 70 && props.project.score <= 90 && props.badProject == true)
      return 'gray';
    if (props.project.score < 70)
      return 'red';
    return 'green';
  }

  return (
    <div className="projectPreview">
      <p>{props.project.id}</p>
      <p>{props.project.name}</p>
      <p style={{ color: 'white', background: getColor() }}> {props.project.score}</p>
      <p>{props.project.durationInDays}</p>
      <p style={{ color: (props.project.bugsCount>50) ? 'red' : 'green' }}>{props.project.bugsCount}</p>
      <p>{props.project.madeDadeline ? 'Yes' : 'False'}</p>
      <p style={{ color: 'white', background: isNeedRetestColor() }}>{isNeedRetest()}</p>
    </div>
  )
}
