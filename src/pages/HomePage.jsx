import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobList from "../components/JobList"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <HomeCards></HomeCards>
      <JobList isHome="true"></JobList>
      <ViewAllJobs></ViewAllJobs>
    </>
  )
}

export default HomePage