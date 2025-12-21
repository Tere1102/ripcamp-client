import './NewRequestForm.css'
import { Form, FloatingLabel, Button, Container } from 'react-bootstrap'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const API_URL = "https://ripcamp-server.fly.dev"

const NewRequestForm = () => {

    const [requestData, setRequestData] = useState({
        email: "",
        name: "",
        type: "",
        tags: "",
        title: "",
        description: "",
        response: false,
    })

    const navigate = useNavigate()

    const handleFormSubmit = (event) => {
        event.preventDefault()

        axios
            .post(`${API_URL}/requests`, requestData)
            .then(() => navigate('/request-list'))
            .catch(err => console.log(err))

    }

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setRequestData({ ...requestData, [name]: value })

    }


    return (


        <Container className="custom-theme col-md-10 d-flex justify-content-center align-items-center" data-bs-theme="dark" >

            <Form onSubmit={handleFormSubmit} className="newRequestForm col-md-10">

                <FloatingLabel controlId="floatingInput" label="Email address" className="mt-2 mb-2">
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={requestData.email}
                        onChange={handleInputChange}
                        name={'email'}
                    />
                </FloatingLabel>

                <FloatingLabel controlId="floatingName" label="Name" className="mt-2 mb-2">
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        value={requestData.name}
                        onChange={handleInputChange}
                        name={'name'}
                    />
                </FloatingLabel>

                <FloatingLabel className="mt-2 mb-2" controlId="floatingProject">
                    <Form.Select
                        aria-label="Default select example"
                        value={requestData.project}
                        onChange={handleInputChange}
                        name={'project'}
                    >
                        <option>Project: </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel className="mt-2 mb-2" controlId="floatingType">
                    <Form.Select
                        aria-label="Default select example"
                        value={requestData.type}
                        onChange={handleInputChange}
                        name={'type'}
                    >
                        <option>Request type: </option>
                        <option value="Doubt">Doubt</option>
                        <option value="Help">Help</option>
                        <option value="Technical Assistance">Technical Assistance</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel className="mt-2 mb-2" controlId="floatingTags">
                    <Form.Select
                        aria-label="Default select example"
                        value={requestData.tags}
                        onChange={handleInputChange}
                        name={'tags'}
                    >
                        <option>Tags: </option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Async programming">Async programming</option>
                        <option value="Reactjs">Reactjs</option>
                        <option value="Phyton">Phyton</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Panda">Panda</option>
                    </Form.Select>
                </FloatingLabel>

                <FloatingLabel controlId="floatingTitleTarea" label="Title" className="mt-2 mb-2">
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        value={requestData.title}
                        onChange={handleInputChange}
                        name={'title'}
                    />
                </FloatingLabel>

                <FloatingLabel controlId="floatingTextarea2" label="Description" className="mt-2 mb-2" >
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        value={requestData.description}
                        onChange={handleInputChange}
                        name={'description'}
                    />
                </FloatingLabel>

                <Button variant="dark mb-5" type="submit" value='New Request'>New Request</Button>

            </Form>

        </Container>

    )
}


export default NewRequestForm