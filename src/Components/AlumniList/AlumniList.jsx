import { useEffect, useState } from "react"
import axios from "axios"
import AlumniCard from "../AlumniCard/AlumniCard"
import { Container, Row, Col } from "react-bootstrap"
import "./AlumniList.css"

const API_URL = "https://ripcamp-server.fly.dev"

const AlumniList = () => {
    const [alumnis, setAlumnis] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get(`${API_URL}/alumni`)
            .then(({ data }) => {
                setAlumnis(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            });
    }, [])

    const skeletonCount = 6;

    return (
        <section className="alumniSection">
            <Container>
                {/* AÑADIDO: justify-content-center para centrar si sobran huecos */}
                <Row className="g-4 justify-content-center">
                    {loading
                        ? Array(skeletonCount)
                            .fill(0)
                            .map((_, i) => (
                                <Col key={i} xs={12} md={6} lg={4}>
                                    <AlumniCard loading={true} />
                                </Col>
                            ))
                        : alumnis.map(alumni => (
                            <Col key={alumni._id} xs={12} md={6} lg={4}>
                                <AlumniCard {...alumni} />
                            </Col>
                        ))}
                </Row>
            </Container>
        </section>
    );
};

export default AlumniList;
