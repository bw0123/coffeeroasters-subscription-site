import Header from '../utils/Header'
import Collection from './Collection'
import WhyChoose from './WhyChoose'
import Coffeepress from '../assets/img/image-hero-coffeepress.jpg'
import How from './How'
import MainBtnDefault from '../utils/MainBtnDefault'

function Home() {
    return(
        <div>
            <Header />
            <main class='coffeepress-container'>
                <img src={Coffeepress} alt='image-hero-coffeepress'></img>
                <div class='coffeepress-txt-container'>
                    <h1>Great coffee<br></br>made simple.</h1>
                        <p>Start your mornings with the world's best coffees. Try our<br></br> 
                            expertly curated artisan coffees from our best roasters<br></br>
                            delivered directly to your door, at your schedule.
                        </p>
                        <MainBtnDefault>Create your plan</MainBtnDefault>
                </div>
            </main>
            <Collection />
            <WhyChoose />
            <How />
        </div>
    )
}

export default Home