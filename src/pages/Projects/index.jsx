import  { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, List, ListItem, Link } from './styles'


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Gusdevr/repos');
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    

    <Container>
        <header>
        <h1>Gustavo Rodrigues</h1>
        <p>Portifolio Gusdevr</p>

        <nav>
          <ul>
           <a href="/"> <li>Home</li> </a> 
           <a href="projects"> <li>Projects</li> </a>
            <a href='https://gusdevr.github.io/Card-Business/' target='https://gusdevr.github.io/Card-Business/'> <li>Contact</li> </a>
          </ul>
        </nav>
      </header>
      <List>
        {projects.map(project => (
          <ListItem key={project.id}>
            <Link href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Projects;
