import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from './pages/JobsPage';
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {

  // Post a new Job
  const AddJob = async (jobObject) => {
    try {
      const res = await fetch('/api/jobs', { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(jobObject)});
      return ;
    } catch (error) {
      console.log('Error adding new job ', error);
    }
  }

  const updateJob = async (jobObject) => {
    try {
      const res = await fetch(`/api/jobs/${jobObject.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify(jobObject)});
      return ;
    } catch (error) {
      console.log('Error on updaate job ', error);
    }
  }

  // Delete Job
  const deleteJob = async (id) => {
    console.log(id)
    try {
      const res = await fetch(`/api/jobs/${id}`, { method: 'DELETE'});
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log('Error deleting job ', error);
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={ <MainLayout />}>
        <Route index element = {<HomePage />} />
        <Route path='/jobs' element = {<JobsPage />} />
        <Route path='/jobs/:id' element = {<JobPage deleteJob={deleteJob}/>} loader={ jobLoader} />
        <Route path='/jobs/edit/:id' element = {<EditJobPage UpdateJobSubmit={ updateJob }/>} loader={ jobLoader} />
        <Route path='/jobs/add' element = {<AddJobPage AddJobSubmit={ AddJob } />}/>
        <Route path='*' element = {<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;