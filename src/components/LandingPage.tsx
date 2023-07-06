import Hero from './Hero';
import About from './About';
import Services from './Services';
import '../uiStyles/LandingPage.css'
const LandingPage = () => {
    return (
        <div className="LandingPage">
            <Hero/>
            <About/>
            <Services/>
        </div>
    )
}

export default LandingPage;