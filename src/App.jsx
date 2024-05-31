import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, {jobLoader} from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // const name = "Chen";
  const addJob = async (job) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(job)
    });
    console.log(job);
    return;
  }

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE"
    });
    console.log('delete:',res);
    return;
  }

  const editJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(job)
    });
    console.log('edit:',res);
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage  addJobSubmission={addJob} /> } />
      <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} /> } loader={jobLoader} />
      <Route path="/edit-jobs/:id" element={<EditJobPage updateJobSubmission={editJob}/> } loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
    )
  );

  return (
    <RouterProvider router={router} />
    // <>
    // <Navbar></Navbar>
    // <Hero></Hero>
    // <HomeCards></HomeCards>
    // <JobList></JobList>
    // <ViewAllJobs></ViewAllJobs>
    // </>
  )
};

export default App