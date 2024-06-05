import Project from"../project"
import projectData from "../../utils/project.json"



export default function PortfolioPage (){
    return(<div>
        <div className="d-flex flex-wrap align-items-stretch">
        {projectData.map((project) => (
          <Project project={project} key={"project-" + project.name} />
        ))}
      </div>
    </div>)
}