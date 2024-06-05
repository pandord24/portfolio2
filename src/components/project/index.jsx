import Card from 'react-bootstrap/Card';
import *as projects from "../../assets"

export default function Project({project}){
    const {name,repo,link,description,image}=project
    return (
       
            <Card style={{ width: '18rem' ,height:'37rem',margin:'1rem',flexBasis:'29%'}}>
      <Card.Img variant="top" src={projects[image]} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
        <Card.Link href={repo}>see the code</Card.Link>
        <Card.Link href={link}>see deployed project</Card.Link>
      </Card.Body>
    </Card>
        
    )
}