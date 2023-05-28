import { ContainerHome, AsideSection, AsideProfile } from "./styles"
import ProfilePng from '../../assets/img/js.png'

const Home = () => {
  return (
    <ContainerHome>
      <header>
        <h1>Gustavo Rodrigues</h1>
        <p>Portifolio Gusdevr</p>

        <nav>
          <ul>
           <a href="/"> <li>Home</li> </a> 
           <a href="projects"> <li>Projects</li> </a>
            <a href="https://gusdevr.github.io/Card-Business/" target="https://gusdevr.github.io/Card-Business/"> <li>Contact</li> </a>
          </ul>
        </nav>
      </header>

        <AsideSection>


            <div className="sec-leg">

           
            <h1>Hello, my name Gustavo Rodrigues</h1>
            <h5>FullStack Developer</h5>
            <p>
                Graduated in <span>Software Engineering</span>,<br />
                I have experience in web development (React, JS, Node.JS and others), <br />
                mobile and content creation for web3 and Data Analysis. <br />
            </p>

           <a href="projects"> <button>PROJECTS ↪</button> </a>

            </div>

        </AsideSection>

        <AsideProfile>

         <a href="https://github.com/Gusdevr" target="https://github.com/Gusdevr" > 
         
         <img src={ ProfilePng } alt=""  /> </a>

        </AsideProfile>

    </ContainerHome>
  );
};

export default Home
