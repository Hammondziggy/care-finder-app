import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
const LandingPage = () => {
    return (
        <div className="LandingPage">
            <Header/>
            <Hero/>
            <About/>
            <Services/>
        </div>
    )
}

export default LandingPage;