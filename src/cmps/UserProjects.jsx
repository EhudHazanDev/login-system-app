import { StatisticsInfo } from '../cmps/StatisticsInfo';
import { TableInfo } from "../cmps/TableInfo";

export const UserProjects = ({ projects }) => {

  return (
    <div className="userProjects">
      <StatisticsInfo projects={projects} />
      <TableInfo projects={projects} />
    </div>
  )
}
