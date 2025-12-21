import { Container, Button, Image } from 'react-bootstrap';
import './AboutPage.css';
import linkedinIcon from '../../assets/iconos/linkedin.png';


const AboutPage = () => {
  return (
    <Container className="aboutPage">

      <h1 className="aboutTitle">Welcome to Ingeina!</h1>

      <p className="aboutDescription">
        Hi! We are Teresa Arranz and Patri Lago, passionate web development students eager to make a positive impact in the tech community. Our journey began as classmates in a rigorous bootcamp, sharing a vision to build a strong and supportive network among students and alumni.
      </p>

      <p className="aboutDescription">
        Our mission is simple yet profound: bridge the gap between current students and alumni of web and data bootcamps, providing a space for connection, collaboration, and support in professional growth.
      </p>

      <p className="aboutDescription">
        Join us to engage in meaningful conversations, mentorship, and community building in tech. Together, we unlock the full potential of collective knowledge and experience.
      </p>

      <p className="aboutSignature">— Teresa & Patri 🩶</p>

      <div className="profilesContainer">
        <Profile
          name="Teresa Arranz"
          imageUrl="https://ca.slack-edge.com/T06BMN0R8BG-U06CH4KHM7F-502fcb046a1f-512"
          linkedInUrl="https://www.linkedin.com/in/teresa-arranz-carrasco/"
          icon={linkedinIcon}
        />

        <Profile
          name="Patri Lago"
          imageUrl="https://ca.slack-edge.com/T06BMN0R8BG-U06D8RF618Q-da5a6e471122-512"
          linkedInUrl="https://www.linkedin.com/in/patri-lago/"
          icon={linkedinIcon}
        />
      </div>  

    </Container>
  )
}

const Profile = ({ name, imageUrl, linkedInUrl, icon }) => (
  <div className="profileCard">
    <Image src={imageUrl} alt={`${name} profile`} rounded className="profileImage" />
    <div className="profileInfo">
      <h3>{name}</h3>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="linkedinButton">
        <Button variant="outline-dark">
          <Image src={icon} alt="LinkedIn" className="linkedinIcon" />
        </Button>
      </a>
    </div>
  </div>
)

export default AboutPage