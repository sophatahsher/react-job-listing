import jobs from '../jobs.json';
import { useState, useEffect } from 'react';
import JobListing from '../components/JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome=false, limit=3}) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {

            try {
                const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
                const res = await fetch(apiUrl);
                const data = await res.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching jobs', error)
            } finally {
                setLoading(false)
            }
        };

        fetchJobs();
    }, []);

    //const jobListings = isHome ? jobs.slice(0, limit): jobs;

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    { isHome ? 'Recent Jobs' : 'Browse Jobs' }
                </h2>
                {
                loading ?
                (<Spinner loading={loading}/>) :
                (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        { jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))
                        }
                    </div>
                )}
            </div>
        </section>
    )
}

JobListings.propTypes = {

}

export default JobListings

