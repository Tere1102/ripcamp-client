import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Form, FloatingLabel, Button } from "react-bootstrap"
import './EditRequestForm.css'

const API_URL = "https://ripcamp-server.fly.dev"

const EditRequestForm = () => {

    const [requestData, setRequestsData] = useState({
        email: "",
        name: "",
        type: "",
        tags: "",
        title: "",
        description: ""
    })


    const { requestId } = useParams()

    useEffect(() => loadRequestsDetails(), [])

    const navigate = useNavigate()

    const loadRequestsDetails = () => {

        axios
            .get(`${API_URL}/requests/${requestId}`)
            .then(({ data }) => setRequestsData(data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setRequestsData({ ...requestData, [name]: value })
    }

    const handleFormsubmit = (e) => {
        e.preventDefault()

        axios
            .put(`${API_URL}/requests/${requestId}`, requestData)
            .then(() => navigate(`/requests/${requestId}`))
            .catch(err => console.log(err))
    }


    return (

        <Container className="custom-theme d-flex justify-content-center align-items-center" data-bs-theme="dark">


            <Form onSubmit={handleFormsubmit} className="editRequestForm col-md-10">

                <FloatingLabel controlId="floatingInput" label="Email address" className="mt-2 mb-2">
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={requestData.email}
                        onChange={handleInputChange}
                        name="email"
                        className="form-control"
                    />
                </FloatingLabel>

                <FloatingLabel controlId="floatingName" label="Name" className="mt-2 mb-2">
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        value={requestData.name}
                        onChange={handleInputChange}
                        name="name"
                        className="form-control"
                    />
                </FloatingLabel>

                <FloatingLabel className="mt-2 mb-2">
                    <Form.Select
                        aria-label="Project select"
                        value={requestData.project}
                        onChange={handleInputChange}
                        name="project"
                        className="form-select"
                    >
                        <option>Project:</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel className="mt-2 mb-2">
                    <Form.Select
                        aria-label="Request type select"
                        value={requestData.type}
                        onChange={handleInputChange}
                        name="type"
                        className="form-select"
                    >
                        <option>Request type:</option>
                        <option value="Doubt">Doubt</option>
                        <option value="Help">Help</option>
                        <option value="Technical Assistance">Technical Assistance</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel className="mt-2 mb-2">
                    <Form.Select
                        aria-label="Tags select"
                        value={requestData.tags}
                        onChange={handleInputChange}
                        name="tags"
                        className="form-select"
                    >
                        <option>Tags:</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Async programming">Async programming</option>
                        <option value="Reactjs">Reactjs</option>
                        <option value="Python">Python</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Panda">Panda</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingTitle" label="Title" className="mt-2 mb-2">
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        value={requestData.title}
                        onChange={handleInputChange}
                        name="title"
                        className="form-control"
                    />
                </FloatingLabel>

                <FloatingLabel controlId="floatingDescription" label="Description" className="mt-2 mb-2">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        value={requestData.description}
                        onChange={handleInputChange}
                        name="description"
                    />
                </FloatingLabel>

                <Button variant="dark" type="submit">New Request</Button>

            </Form>


        </Container>
    )




}

export default EditRequestForm