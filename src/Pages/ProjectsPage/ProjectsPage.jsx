import { Card, Row, Col, Container} from "react-bootstrap"
import './../ProjectsPage/ProjectsPage.css'

const Projects = () => {

    const webProjects = [
        {
            title: "The Game",
            img: "https://images.crazygames.com/games/space-invaders/cover-1591955301711.png",
            desc: "Browser-based JavaScript game built with OOP principles, win/lose logic, clean architecture and deployed with GitHub Pages."
        },
        {
            title: "React Application",
            img: "https://www.alphalogicinc.com/wp-content/uploads/2019/02/React-app.jpg",
            desc: "Single Page Application built with React, full CRUD functionality, API integration and deployed online."
        },
        {
            title: "Full Stack App",
            img: "https://www.monday.com/blog/wp-content/uploads/2021/06/cg45imeetz97Bi1aO7F7Hczm_okRzkD90cI_n85UntHmyphNEJH2J1DmAO1KPt0jjIPLAmCsKannpMIDta9armoNXipQOrsCRxDQPwBR7rjcawY6BD4-HxQDqxsgSQAFoA2LQfvT.png",
            desc: "Full-stack application combining data processing, backend services and a modern frontend."
        }
    ];

    const dataProjects = [
        {
            title: "Scraping & APIs",
            img: "https://sceglifornitore.it/blog/wp-content/uploads/2021/02/data-analyst.png",
            desc: "Python project focused on web scraping, API consumption, data cleaning, EDA and insights generation."
        },
        {
            title: "Data Analysis Project",
            img: "https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/what-is-data-analyst.jpg",
            desc: "Data cleaning, hypothesis testing, performance metrics, experimentation and Tableau dashboards."
        },
        {
            title: "Full Stack App",
            img: "https://owiusmadrid.com/wp-content/uploads/2019/10/Desarrollo-Web.png",
            desc: "Full-stack application combining data processing, backend services and a modern frontend."
        }
    ];

    // Componente reutilizable para renderizar una lista de tarjetas
    const ProjectList = ({ projects }) => (
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {projects.map((project, index) => (
                <Col key={index}>
                    <Card className="project-card h-100">
                        <div className="card-img-wrapper">
                            <Card.Img
                                variant="top"
                                src={project.img}
                                alt={project.title}
                            />
                        </div>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.desc}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );

    return (
        <div className="projects-page">
            <Container className="projects-section">
                <h1 className="section-title">Web Projects</h1>
                <ProjectList projects={webProjects} />
            </Container>

            <Container className="projects-section">
                <h1 className="section-title">Data Projects</h1>
                <ProjectList projects={dataProjects} />
            </Container>
        </div>
    );
}

export default Projects;