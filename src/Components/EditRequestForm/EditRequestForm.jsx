import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Form, FloatingLabel, Button } from "react-bootstrap"

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
        <Container className="col-md-10">


            <Form onSubmit={handleFormsubmit} className="col-md-10">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mt-2 mb-2"
                >

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


                <FloatingLabel className="mt-2 mb-2">
                    <Form.Select aria-label="Default select example"
                        type="text"
                        placeholder="Default select example"
                        value={requestData.project}
                        onChange={handleInputChange}
                        name={'project'}>
                        <option>Project: </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>

                    </Form.Select>
                </FloatingLabel>



                <FloatingLabel className="mt-2 mb-2">
                    <Form.Select aria-label="Default select example"
                        type="text"
                        placeholder="Default select example"
                        value={requestData.type}
                        onChange={handleInputChange}
                        name={'type'}>
                        <option>Request type: </option>
                        <option value="Doubt">Doubt</option>
                        <option value="Help">Help</option>
                        <option value="Technical Assistance">Technical Assistance</option>
                    </Form.Select>
                </FloatingLabel>


                <FloatingLabel className="mt-2 mb-2">
                    <Form.Select aria-label="Default select example"
                        type="text"
                        placeholder="Default select example"
                        value={requestData.tags}
                        onChange={handleInputChange}
                        name={'tags'}>
                        <option>Tags: </option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Async programming">Async programming</option>
                        <option value="Reactjs">Reactjs</option>
                        <option value="Phyton">Phyton</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Panda">Panda</option>
                    </Form.Select>
                </FloatingLabel>






                <FloatingLabel controlId="floatingTitleTarea" label="title" className="mt-2 mb-2">

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
                        type="text"
                        as="textarea"
                        placeholder="Leave a comment here"
                        value={requestData.description}
                        onChange={handleInputChange}
                        name={'description'}
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>



                <Button variant="dark" type="submit" value='New Request'>New Request</Button>

            </Form>

        </Container>
    )




}

export default EditRequestForm