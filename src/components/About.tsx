
export default function About() {
    return (
        <div className="about-section">
            <section className="about-img">
                <img className="img1" src="../images/about-pic.png"/>
                <img className="img2" src="../images/about2.png"/>
            </section>
            <section className="about-text">   
                <h3 className="about-title">Welcome to CareFinder</h3>
                <p>
                    Carefinder is a platform where users can
                    search for hospitals in their areas, export
                    hospital details for your records and enhance
                    your healthcare experience by connecting with 
                    others and sharing valuable resources.
                </p>
                <button className="about-btn">OUR SERVICES</button>
            </section>
        </div>
    )
}