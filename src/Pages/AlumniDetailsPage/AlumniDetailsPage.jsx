import { useEffect, useState } from "react"
import { Card, Button, Col, Row, Badge } from "react-bootstrap" // Quitamos Spinner, añadimos Skeleton
import { useParams, Link } from "react-router-dom"
import axios from "axios"

import "./AlumniDetailsPage.css"
import Skeleton from "../../Components/Skeleton/Skeleton" 

const API_URL = "https://ripcamp-server.fly.dev"

const AlumniDetailsPage = () => {

    const [alumni, setAlumni] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const { alumniId } = useParams()

    useEffect(() => {
        axios
            .get(`${API_URL}/alumni/${alumniId}`)
            .then(({ data }) => {
                setAlumni(data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [alumniId])


    if (isLoading) {
        return (
            <div className="alumni-page">
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        
                        <Card className="AlumniCard">
                            
                            
                            <Skeleton width="100%" height="260px" style={{borderBottom: "1px solid rgba(255, 255, 255, 0.08)"}} />

                            <Card.Body>
                               
                                <div className="d-flex justify-content-center mb-3">
                                    <Skeleton width="60%" height="32px" />
                                </div>

                               
                                <div className="d-flex flex-column gap-2 mb-4">
                                    <Skeleton width="40%" height="20px" />
                                    <Skeleton width="55%" height="20px" />
                                    <Skeleton width="35%" height="20px" />
                                    <Skeleton width="45%" height="20px" />
                                    
                                   
                                    <div className="d-flex gap-2 mt-2">
                                        <Skeleton width="60px" height="24px" borderRadius="10px" />
                                        <Skeleton width="60px" height="24px" borderRadius="10px" />
                                        <Skeleton width="60px" height="24px" borderRadius="10px" />
                                    </div>

                                    <Skeleton width="50%" height="20px" className="mt-2" />
                                    <Skeleton width="40%" height="20px" />
                                    
                                    
                                    <Skeleton width="80px" height="24px" borderRadius="10px" className="mt-1" />
                                </div>

                                
                                <div className="d-flex justify-content-between mt-4">
                                   
                                    <Skeleton width="90px" height="38px" borderRadius="5px" />
                                   
                                    <Skeleton width="70px" height="38px" borderRadius="5px" />
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

    
    const {
        img,
        fullName,
        contact,
        address,
        birth,
        languages,
        isWorking,
        bootcamp,
        campus
    } = alumni

    return (
        <div className="alumni-page">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="AlumniCard">

                        <Card.Img
                            variant="top"
                            src={img}
                            alt={`${fullName.firstName} ${fullName.lastName}`}
                        />

                        <Card.Body>
                            <Card.Title className="text-center mb-3">
                                {fullName.firstName} {fullName.lastName}
                            </Card.Title>

                            <Card.Text><strong>Phone:</strong> {contact.phone}</Card.Text>
                            <Card.Text><strong>Email:</strong> {contact.email}</Card.Text>
                            <Card.Text><strong>City:</strong> {address.city}</Card.Text>
                            <Card.Text><strong>Birth:</strong> {birth}</Card.Text>

                            <Card.Text>
                                <strong>Languages:</strong>{" "}
                                {languages.map((language, index) => (
                                    <Badge key={index} bg="secondary" className="me-1">
                                        {language}
                                    </Badge>
                                ))}
                            </Card.Text>

                            <Card.Text><strong>Bootcamp:</strong> {bootcamp}</Card.Text>
                            <Card.Text><strong>Campus:</strong> {campus}</Card.Text>

                            <Card.Text>
                                <strong>Status:</strong>{" "}
                                <Badge bg={isWorking ? "success" : "danger"}>
                                    {isWorking ? "Working" : "Not working"}
                                </Badge>
                            </Card.Text>

                            <div className="d-flex justify-content-between mt-4">
                                <Link to="/request-form">
                                    <Button variant="dark">Request</Button>
                                </Link>

                                <Link to="/alumni">
                                    <Button variant="outline-dark">Back</Button>
                                </Link>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AlumniDetailsPage
