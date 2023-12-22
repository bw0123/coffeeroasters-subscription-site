import Header from '../utils/Header'
import Collection from './Collection'
import WhyChoose from './WhyChoose'
import coffeepress from '../assets/img/image-hero-coffeepress.jpg'
import HowItWorks from './How'

function Home() {
    return(
        <div>
            <Header />
            <main class='coffeepress-container'>
                <img src={coffeepress} alt='image-hero-coffeepress'></img>
                <div class='coffeepress-txt-container'>
                    <h1>Great coffee<br></br>made simple.</h1>
                        <p>Start your mornings with the world's best coffees. Try our<br></br> 
                            expertly curated artisan coffees from our best roasters<br></br>
                            delivered directly to your door, at your schedule.
                        </p>
                    <button class='main-btn-default'>
                        Create your plan
                    </button>
                </div>
            </main>
            <Collection />
            <WhyChoose />
            <HowItWorks />
        </div>
    )
}

export default Home