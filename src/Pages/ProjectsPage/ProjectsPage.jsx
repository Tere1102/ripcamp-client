import { Card, Row, Col, Container} from "react-bootstrap"
import './../ProjectsPage/ProjectsPage.css'

import projectWeb1 from '../../assets/images/projectWeb1.png'
import projectWeb2 from'../../assets/images/projectWeb2.png'
import projectWeb3 from'../../assets/images/projectWeb3.png'

import projectData1 from '../../assets/images/projectData1.png'
import projectData2 from'../../assets/images/projectData2.png'
import projectData3 from'../../assets/images/projectData3.png'


const Projects = () => {

    const webProjects = [
        {
            title: "JavaScript Browser Game",
            img: projectWeb1,
            desc: "Browser-based game built with vanilla JavaScript, HTML, and CSS, applying core programming concepts such as functions, loops, objects, and game logic (win/lose conditions). Focused on DOM manipulation and clean code structure."
        },
        {
            title: "React Single Page Application",
            img: projectWeb2,
            desc: "Single Page Application built with React using a component-based architecture, hooks, and modern JavaScript. Features full CRUD functionality, API integration with async/await, multiple views, and deployment to a live environment."
        },
        {
            title: "Full-Stack MERN Application",
            img: projectWeb3,
            desc: "Full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js). Includes RESTful API development, user authentication and authorization, protected routes, full CRUD operations, and deployment following agile team workflows."
        }
    ];

    const dataProjects = [
        {
            title: "Data Collection & Dataset Engineering",
            img: projectData1,
            desc: "End-to-end Python project focused on data acquisition through APIs and web scraping, data cleaning and transformation with Pandas, and dataset creation from scratch. Includes automation workflows, exploratory analysis, and storage in a relational database."
        },
        {
            title: "Exploratory Data Analysis & Business Insights",
            img: projectData2,
            desc: "Exploratory data analysis project using Python and SQL to uncover patterns and relationships in real-world datasets. Includes statistical analysis, hypothesis testing, and data visualization with Matplotlib, Seaborn, and Tableau to communicate actionable business insights."
        },
        {
            title: "Machine Learning & Predictive Analytics Project",
            img: projectData3,
            desc: "Final capstone project applying supervised and unsupervised machine learning techniques using Scikit-learn. Includes data preprocessing, model training and evaluation (regression, classification, clustering), and the integration of generative AI tools to enhance real-world analytical workflows."
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