import { CardGroup, Card, Row, Col, Container, Button } from "react-bootstrap"
import './../ProjectsPage/ProjectsPage.css'
import { Link } from "react-router-dom";


const Projects = () => {

    return (
        <>
            <Container>
                <h1 className="mb-5 mt-5">Web Projects 💻</h1>
                <CardGroup>
                    <Row>

                        <Col mb={4}>
                            <Card className="ProjectCard h-100">
                                <Card.Img
                                    variant="top"
                                    src="https://images.crazygames.com/games/space-invaders/cover-1591955301711.png?auto=format,compress&q=75&cs=strip"
                                    alt="Web Project 1" />
                                <Card.Body>
                                    <Card.Title>Porject #1: The Game</Card.Title>
                                    <Card.Text >
                                        Technical Requirements
                                        Your game must meet the following technical requirements:
                                        Render a game in the browser.
                                        Have logic for winning and/or losing and show feedback to the player in either case:
                                        Your game must have logic that allows the player to win or lose.
                                        Your game code must be organized in separate files for HTML, CSS, and JavaScript.
                                        Use plain JavaScript for DOM manipulation.
                                        Your game entities and elements must be organized using classes and OOP.
                                        Have a repo on GitHub.
                                        Have at least one (1) commit per day that you worked on.
                                        You must deploy your game online using GitHub Pages so anyone can play it.
                                        Your code should follow the principles of KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself).{' '}
                                    </Card.Text>

                                </Card.Body>

                            </Card>
                        </Col>

                        <Col mb={4}>
                            <Card className="ProjectCard h-100">
                                <Card.Img
                                    variant="top"
                                    src="https://www.alphalogicinc.com/wp-content/uploads/2019/02/React-app.jpg"
                                    alt="Web Project 2" />
                                <Card.Body>
                                    <Card.Title>Project #2: React Application</Card.Title>
                                    <Card.Text >
                                        Technical requirements:
                                        Create a Single Page Application (SPA), using React, consisting of multiple views.
                                        The React application should be integrated with either a mock backend or an external API and should perform all CRUD
                                        (Create, Read, Update, Delete) operations on that API.
                                        Your project should be deployed online, allowing anyone to access and use your app.
                                        Have your project available on a GitHub repository. If your project includes a mock
                                        back-end API you should have two GitHub repositories - one for your front-end React application and the other for your back-end API.
                                        Have at least 2 commits per day on your project repository that you worked on.
                                        As a final step, check all the features outlined in points 1 - 3 and ensure they are implemented and working ahead of delivery.{' '}
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>



                        <Col mb={4}>
                            <Card className="ProjectCard h-100">
                                <Card.Img className="ImgCard"
                                    variant="top"
                                    src="https://www.monday.com/blog/wp-content/uploads/2021/06/cg45imeetz97Bi1aO7F7Hczm_okRzkD90cI_n85UntHmyphNEJH2J1DmAO1KPt0jjIPLAmCsKannpMIDta9armoNXipQOrsCRxDQPwBR7rjcawY6BD4-HxQDqxsgSQAFoA2LQfvT.png"
                                    alt="Web Project 3" />
                                <Card.Body>
                                    <Card.Title>Project #3: MIEDITO</Card.Title>
                                    <Card.Text>
                                        Technical Requirements:
                                        Your project must meet the following technical requirements: Create a Single Page Application (SPA),
                                        using React, consisting of multiple views.
                                        The React application should be integrated with either a mock backend or an external API and should perform all CRUD
                                        (Create, Read, Update, Delete) operations on that API.
                                        Your project should be deployed online, allowing anyone to access and use your app. Have your project available on a GitHub repository.
                                        If your project includes a mock back-end API you should have two GitHub repositories
                                        - one for your front-end React application and the other for your back-end API. Have at least 2 commits per day on your
                                        project repository that you worked on.
                                        As a final step, check all the features outlined in points 1 - 3 and ensure they are implemented and working ahead of delivery.{' '}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </CardGroup>

            </Container>

            <Container>

                <h1 className="mb-5 mt-5">Data Projects 📈</h1>
                <CardGroup className="mb-5">
                    <Row>
                        <Col mb={4}>
                            <Card className="ProjectCard h-100">
                                <Card.Img className="ImgCard"
                                    variant="top"
                                    src="https://sceglifornitore.it/blog/wp-content/uploads/2021/02/data-analyst.png"
                                    alt="Data Project 1" />
                                <Card.Body>
                                    <Card.Title>Porject #1: Scraping & APIs</Card.Title>
                                    <Card.Text>
                                        Welcome to the end of Module 1 Project! You will apply all of the skills and knowledge you have accumulated throughout the module in this project. As a result, you will be expected to showcase you skills in:
                                        Python (Data Types, Data Structures, Functions, Flow Control, Error Handling, List, Dict, Set Comprehension, Lambda Functions, Object Oriented Programming)
                                        Data Wrangling, Cleaning & Manipulation
                                        Data Structuring & Combining
                                        Basic Exploratory Data Analysis (EDA) for insights gatheringWeb Scraping & APIs.{' '}
                                    </Card.Text>
                                </Card.Body>

                            </Card>
                        </Col>

                        <Col mb={4}>
                            <Card className="ProjectCard h-100">
                                <Card.Img className="ImgCard"
                                    variant="top"
                                    src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct/what-is-data-analyst.jpg"
                                    alt="Data Project 2" />
                                <Card.Body>
                                    <Card.Title>Project #2: Kanban Board</Card.Title>
                                    <Card.Text>
                                        Welcome to the Module 2 project! You will apply all of the skills and knowledge you have
                                        accumulated throughout the module as well as new things you will learn over the next two weeks.
                                        You are not expected to be able to know everything from the beginning of the project -
                                        you will learn about the following topics and apply them to your project over the next two weeks:
                                        EDA and Data Cleaning
                                        Performance Metrics
                                        Hypothesis testing
                                        Experiment Evaluation
                                        Tableau
                                        SetupIn this project you will work in pairs.
                                        Like with the projects and mini projects, you should create a Kanban board for project
                                        management purposes
                                        in order to decide how to best divide the work between you..{' '}
                                    </Card.Text>

                                </Card.Body>

                            </Card>
                        </Col>

                        <Col mb={4}>
                            <Card className="ProjectCard h-100">
                                <Card.Img className="ImgCard"
                                    variant="top"
                                    src="https://owiusmadrid.com/wp-content/uploads/2019/10/Desarrollo-Web.png"
                                    alt="Data Project 3" />
                                <Card.Body>
                                    <Card.Title>Project #3: MIEDITO</Card.Title>
                                    <Card.Text>
                                        Technical Requirements:
                                        Your project must meet the following technical requirements: Create a Single Page Application (SPA),
                                        using React, consisting of multiple views.
                                        The React application should be integrated with either a mock backend or an external API and should perform all CRUD
                                        (Create, Read, Update, Delete) operations on that API.
                                        Your project should be deployed online, allowing anyone to access and use your app. Have your project available on a GitHub repository.
                                        If your project includes a mock back-end API you should have two GitHub repositories
                                        - one for your front-end React application and the other for your back-end API. Have at least 2 commits per day on your
                                        project repository that you worked on.
                                        As a final step, check all the features outlined in points 1 - 3 and ensure they are implemented and working ahead of delivery.{' '}
                                    </Card.Text >

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Link to={"/"}>
                        <Button variant="dark mt-5 mb-5" size="lg">
                            🔙 Back to Home
                        </Button>
                    </Link>


                </CardGroup>
            </Container >
        </>
    );
}

export default Projects