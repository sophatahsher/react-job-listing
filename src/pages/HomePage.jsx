import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';

const HomePage = () => {
    return (<>
        <Hero title="Custom Title Here!" subtitle="Find the React job that fits your skills and needs"/>
        <HomeCards />
        <section className='bg-blue-50 px-4 py-6'>
            <JobListings isHome='true' />
        </section>
    </>
    );
};

export default HomePage;
