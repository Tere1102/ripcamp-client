import './NotFoundPage.css'
import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from 'react-bootstrap'

const NotFoundPage = () => {

    return (

        <div className="d-flex align-items-center justify-content-center text-light">
            
            <Container>
                <Row className="notFoundPage justify-content-center align-items-center">
                    <Col md={8} className="text-center">
                        
                        
                        <h1 className="display-1 fw-bold text-white" style={{ fontSize: '10rem', opacity: '0.8' }}>
                            404
                        </h1>

                        
                        <h2 className="mb-4">
                            <span className="text-secondary">Oops!</span> Página no encontrada
                        </h2>

                        
                        <p className="mb-5 text-secondary lead">
                            Parece que la página que estás buscando ha sido movida, 
                            borrada o nunca existió.
                        </p>

                        
                        <Link to={"/"}>
                            <Button 
                                variant="outline-light" 
                                size="lg" 
                                className="px-5 py-2 rounded-pill"
                            >
                                Volver al Inicio
                            </Button>
                        </Link>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default NotFoundPage