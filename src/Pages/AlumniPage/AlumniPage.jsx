import AlumniList from "./../../Components/AlumniList/AlumniList"
import "./AlumniPage.css"

const AlumniPage = () => {
  return (
    <main className="alumniPage">
      <h1 className="alumniPageTitle">Meet Our Alumni</h1>
      <AlumniList />
    </main>
  )
}

export default AlumniPage