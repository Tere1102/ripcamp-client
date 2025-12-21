import { Container, Accordion, Button, Form, FloatingLabel } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import './ResponseRequest.css'

const API_URL = "https://ripcamp-server.fly.dev"

const ResponseRequest = ({ request, loadRequests }) => {

    const [requestData, setRequestsData] = useState({ ...request })

    const handleInputChange = e => {
        setRequestsData({ ...requestData, textresponse: e.target.value })
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        axios
            .put(`${API_URL}/requests/${request.id}`, { ...requestData, response: true })
            .then(() => loadRequests())
            .catch(err => console.log(err))

    }


    return (


        <Container className="custom-theme responseRequest mt-3">

            {
                request?.response === false &&

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>Response:</strong> </Accordion.Header>
                        <Accordion.Body>

                            <Form onSubmit={handleCommentSubmit}>
                                <FloatingLabel controlId="floatingTextarea2" label="Comment..." className="mt-2 mb-2" >
                                    <Form.Control
                                        as="textarea" /* Cambio importante: para que sea una caja de texto */
                                        style={{ height: '100px' }}
                                        type="text"
                                        name={'textresponse'}
                                        value={requestData?.textresponse}
                                        onChange={handleInputChange}
                                        placeholder="Comment..."
                                    />
                                </FloatingLabel>
                                <div className="d-flex justify-content-center">
                                    <Button type="submit" className="mt-3 mb-2 justify-content-center" variant="dark">Send response</Button>
                                </div>
                            </Form>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            }

        </Container>

    )

}

export default ResponseRequest