import { Card, ListGroup, Container, Col, Row, Button, Badge } from "react-bootstrap"
import { useEffect, useState } from "react"
import axios from "axios"
import './../../Pages/RequestsPage/RequestsPage.css'
import { Link} from "react-router-dom"
import ResponseRequest from "../../Components/ResponseRequest/ResponseRequest"
import Skeleton from "../../Components/Skeleton/Skeleton" 

const API_URL = "https://ingeina-server.fly.dev"


const RequestsPage = () => {

    const [requests, setRequests] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => loadRequests(), [])

    const loadRequests = () => {
        axios
            .get(`${API_URL}/requests/`)
            .then(({ data }) => {
                setRequests(data)
                setIsLoading(false) 
            })
            .catch(err => {
                console.log(err)
               setIsLoading(false)
            })
    }

    const deleteRequest = requestId => {
        axios
            .delete(`${API_URL}/requests/${requestId}`)
            .then(() => loadRequests())
            .catch(err => console.log(err))
    }

    const pendingRequests = requests.filter(req => !req.response)
    const completedRequests = requests.filter(req => req.response)

    //FUNCIÓN SKELETON
    const renderSkeletonCards = () => {
        return Array(4).fill(0).map((_, index) => (
            <Col xs={12} md={6} key={`skeleton-${index}`}>
                <div className="requestCard h-100">
                    <Card style={{ width: '100%' }} className="h-100">
                        
                        <ListGroup className="list-group-flush">
                            {/* 1. Header (Name + Badge) */}
                            <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                <Skeleton width="40%" height="24px" /> 
                                <Skeleton width="80px" height="24px" borderRadius="4px" />
                            </ListGroup.Item>
                            
                            {/* 2. Las 4 filas de datos */}
                            <ListGroup.Item><Skeleton width="60%" height="20px" /></ListGroup.Item>
                            <ListGroup.Item><Skeleton width="30%" height="20px" /></ListGroup.Item>
                            <ListGroup.Item><Skeleton width="40%" height="20px" /></ListGroup.Item>
                            <ListGroup.Item><Skeleton width="25%" height="20px" /></ListGroup.Item>
                        </ListGroup>

                        <Card.Body className="d-flex flex-column">
                            {/* 3. Título */}
                            <div className="mb-3 pb-2 border-bottom border-secondary">
                                <Skeleton width="70%" height="32px" />
                            </div>

                            {/* 4. Descripción */}
                            <div className="mb-4 flex-grow-1">
                                <Skeleton width="100%" height="16px" className="mb-2" />
                                <Skeleton width="95%" height="16px" className="mb-2" />
                                <Skeleton width="90%" height="16px" className="mb-2" />
                            </div>

                            {/* 5. BOTONES */}
                            <div className="d-flex gap-2 mb-4 justify-content-center">
                                <Skeleton width="200px" height="45px" borderRadius="0.375rem" />
                                <Skeleton width="200px" height="45px" borderRadius="0.375rem" />
                            </div>

                            <div className="mt-3 px-2"> 
                                <Skeleton width="100%" height="52px" borderRadius="8px" />
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </Col>
        ))
    }
    const renderCard = (request) => (
        <Col xs={12} md={6} key={request.id}>
            <div className={`requestCard h-100 ${request.response ? 'completed-card' : ''}`}>
                <Card style={{ width: '100%' }} className="h-100">

                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <span><strong>Name: </strong> {request.name}</span>
                            {request.response 
                                ? <Badge bg="success">Responded</Badge> 
                                : <Badge className="badge-pending">Pending</Badge>
                            }
                        </ListGroup.Item>
                        <ListGroup.Item><strong>Email: </strong> {request.email}</ListGroup.Item>
                        <ListGroup.Item><strong>Project: </strong> {request.project}</ListGroup.Item>
                        <ListGroup.Item><strong>Type: </strong>{request.type}</ListGroup.Item>
                        <ListGroup.Item><strong>Tag: </strong>{request.tags}</ListGroup.Item>
                    </ListGroup>

                    <Card.Body className="d-flex flex-column">
                        <Card.Title className="textCard fs-3">{request.title}</Card.Title>
                        <Card.Text className="mb-4 flex-grow-1">
                            {request.description}
                        </Card.Text>

                        <div className="d-flex gap-2 mb-4 justify-content-center">
                            <Link to={`/request/edit/${request.id}`}>
                                <Button variant="dark" >Edit</Button>
                            </Link>
                            <Button onClick={() => deleteRequest(request.id)} variant="dark" >Delete</Button>
                        </div>

                        <ResponseRequest request={request} loadRequests={loadRequests} />
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )


    if (isLoading) {
        return (
            <Container className="custom-theme requestsPage mt-4">
                 <h2 className="mb-4 text-white border-bottom pb-2 border-secondary">
                    <Skeleton width="350px" height="40px" style={{background: 'rgba(255,255,255,0.05)'}}/>
                 </h2>
                 <Row className="g-4">
                    {renderSkeletonCards()}
                 </Row>
            </Container>
        )
    }

    return (
        <Container className="custom-theme requestsPage mt-4">

            <h2 className="mb-4 text-white border-bottom pb-2 border-secondary">
                🔥 Pending Responses ({pendingRequests.length})
            </h2>
            
            <Row className="g-4 mb-5">
                {pendingRequests.length > 0 ? (
                    pendingRequests.map(renderCard)
                ) : (
                    <p className="text-white text-center opacity-50">No pending requests! Great job.</p>
                )}
            </Row>

            {completedRequests.length > 0 && (
                <>
                    <h2 className="mb-4 text-white border-bottom pb-2 border-secondary mt-5">
                        ✅ History / Completed ({completedRequests.length})
                    </h2>
                    <Row className="g-4">
                        {completedRequests.map(renderCard)}
                    </Row>
                </>
            )}

        </Container >
    )
}
export default RequestsPage