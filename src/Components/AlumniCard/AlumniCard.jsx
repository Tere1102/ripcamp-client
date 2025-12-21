import { Link } from "react-router-dom"
import { Button, Card } from "react-bootstrap"
import "./AlumniCard.css"
import Skeleton from './../Skeleton/Skeleton';

const AlumniCard = ({ id, img, fullName, contact, isWorking, loading = false }) => {
  if (loading) {
    return (
      <Card className="AlumniCard" style={{ padding: "15px 20px" }}>
        <Card.Body className="alumniBody">
          <div className="alumniContent" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Skeleton width="100px" height="100px" borderRadius="50%" />

            <div className="alumniInfo" style={{ flexGrow: 1 }}>
              <Skeleton width="60%" height="20px" style={{ marginBottom: "10px" }} />
              <Skeleton width="40%" height="15px" style={{ marginBottom: "5px" }} />
              <Skeleton width="50%" height="15px" style={{ marginBottom: "5px" }} />
              <Skeleton width="30%" height="15px" style={{ marginBottom: "10px" }} />
              <Skeleton width="100px" height="35px" borderRadius="8px" />
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }

  // Contenido normal cuando ya está cargado
  const { firstName, lastName } = fullName;
  const { email, phone } = contact;

  return (
    <Card className="AlumniCard">
      <Card.Body className="alumniBody">

        <div className="alumniContent">
          <img
            className="alumniImg"
            src={img}
            alt={`${firstName} ${lastName} profile`}
          />

          <div className="alumniInfo">
            <Card.Title>
              <Link to={`/alumni/${id}`} className="alumniName">
                {firstName} {lastName}
              </Link>
            </Card.Title>

            <Card.Text>
              <strong>Email:</strong> {email}
            </Card.Text>

            <Card.Text>
              <strong>Phone:</strong> {phone}
            </Card.Text>

            <Card.Text>
              <strong>Status:</strong>{" "}
              <span className={`status ${isWorking ? "status-working" : "status-not-working"}`}>
                {isWorking ? "Available" : "Unavailable"}
              </span>
            </Card.Text>


            <div className="buttonContainer">
              <Link to={`/alumni/${id}`}>
                <Button className="alumniButton">
                  View profile
                </Button>
              </Link>
            </div>
          </div>
        </div>


      </Card.Body>
    </Card>
  )
}

export default AlumniCard

