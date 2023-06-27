import react from 'react';

export default function Hero() {
    return (
        <div className="Hero-banner">
            <section className="banner">
                <section className="banner-text">
                    <p className="banner-item1">
                        Find the nearest hospital
                        to you and make an appointment
                    </p>
                    <p className="banner-item2">
                        Discover Your Perfect Care;
                        Find Your Hospital, Anytime, Anywhere!
                    </p>
                    <button className="banner-btn">GET STARTED</button>
                    <p>Learn more</p>
                </section>
                <img className="banner-img" src="../public/images/rectangle-1.png"/>
            </section>
            <h5>Find a nearby hospital</h5>

        </div>
    )
}