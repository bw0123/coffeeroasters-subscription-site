import Coffeepress from '../assets/img/image-hero-coffeepress.jpg'
import MainBtnDefault from '../utils/MainBtnDefault'
import Granespresso from '../assets/icons/image-gran-espresso.png'
import Planalto from '../assets/icons/image-planalto.png'
import Piccollo from '../assets/icons/image-piccollo.png'
import Danche from '../assets/icons/image-danche.png'
import Coffeebean from '../assets/icons/IconCoffeeBean'
import Gift from '../assets/icons/IconGift'
import Truck from '../assets/icons/IconTruck'
import StepsOval from '../assets/icons/Oval'

function Home() {
    return(
        <div>
            <main class='main-bg-container'>
                <img src={Coffeepress} alt='image-hero-coffeepress'></img>
                <div class='main-bg-txt-container'>
                    <h1>Great coffee<br></br>made simple.</h1>
                        <p>Start your mornings with the world's best coffees. Try our<br></br> 
                            expertly curated artisan coffees from our best roasters<br></br>
                            delivered directly to your door, at your schedule.
                        </p>
                    <MainBtnDefault>Create your plan</MainBtnDefault>
                </div>
            </main>
            <section>
                <h1 id='our-collection'>our collection</h1>
                    <div class='collection-flex-container'>
                        <div class='collection-item-container'>
                            <img src={Granespresso} alt='image-gran-espresso'></img>
                            <h4 class='collection-label'>Gran Espresso</h4>
                            <p class='collection-desc'>Light and flavorful blend with cocoa<br></br>and black pepper for an intense<br></br>experience.</p>
                        </div>
                        <div class='collection-item-container'>
                            <img src={Planalto} alt='image-planalto'></img>
                            <h4 class='collection-label'>Planalto</h4>
                            <p class='collection-desc'>Brazilian dark roast with rich and<br></br>velvety body, and hints of fruits and<br></br>nuts.</p>
                        </div>
                        <div class='collection-item-container'>
                            <img src={Piccollo} alt='image-piccollo'></img>
                            <h4 class='collection-label'>Piccollo</h4>
                            <p class='collection-desc'>Mild and smooth blend featuring<br></br>notes of toasted almond and dried<br></br>cherry.</p>
                        </div>
                        <div class='collection-item-container'>
                            <img src={Danche} alt='image-danche'></img>
                            <h4 class='collection-label'>Danche</h4>
                            <p class='collection-desc'>Ethiopian hand-harvested blend<br></br>densely packed with vibrant fruit<br></br>notes.</p>
                        </div>
                </div>
            </section>
            <section class='why-choose-container'>
                <div class='why-choose-txt-container'>
                    <h2 id='why-choose-title'>Why choose us?</h2>
                        <p class='why-choose-desc'>A large part of our role is choosing which particular coffees will be feature<br></br>
                            in our range. This means working closely with the best coffee growers to give<br></br>
                            you are more impactful experience on every level.
                        </p>
                </div>
                <div class='why-card-flex-container'>
                    <div class='why-card-container'>
                        <div class='why-card-info'>
                            <Coffeebean />
                            <h4 class='why-label'>Best quality</h4>
                            <p class='why-desc'>Discover an endless variety of the<br></br>world's best artisann coffee from each<br></br>of our roasters.</p>
                        </div>
                    </div>  
                    <div class='why-card-container'>
                        <div class='why-card-info'>
                            <Gift />
                            <h4 class='why-label' >Exclusive benefits</h4>
                            <p class='why-desc'>Special offers and swag when you<br></br>subscribe, including 30% off your<br></br>first shipment.</p>
                        </div>
                    </div>
                    <div class='why-card-container'>
                        <div id='why-card-info-truck'>
                            <Truck />
                            <h4 class='why-label'>Free shipping</h4>
                            <p class='why-desc'>We cover the cost and coffee is<br></br>delivered fast. Peak freshness:<br></br>guarenteed.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class='how-hq-container'>
                <h3 class='how-hq-txt-grey'>How it works</h3>
                    <hr class='hr-shared' id='how-hr'></hr>
                    <div class='how-hq-flex-container'>
                        <div class='how-hq-step-container'>
                            <StepsOval/>
                            <h1 class='how-step-number'>01</h1>
                            <h3 class='how-hq-step-label'>Pick your<br></br>coffee</h3>
                            <p class='how-hq-step-desc'>Select from our evolving range of artisan<br></br>coffees. Our beans are ethically sourced<br></br>and we pay fair prices for them. There are<br></br>new coffees in all profiles every month<br></br>for you to try out.</p>
                            <MainBtnDefault>Create your plan</MainBtnDefault>
                        </div>
                        <div class='how-hq-step-container'>
                            <StepsOval/>
                            <h1 class='how-step-number'>02</h1>
                            <h3 class='how-hq-step-label'>Choose the<br></br>frequency</h3>
                            <p class='how-hq-step-desc'>Customize your order frequency,<br></br>quantity, even your roast style and grind<br></br>type. Pause, skip or cancel your<br></br>subscription with no commitment<br></br>through our online portal.</p>
                        </div>
                        <div class='how-hq-step-container'>
                            <StepsOval/>
                            <h1 class='how-step-number'>03</h1>
                            <h3 class='how-hq-step-label'>Receive and<br></br>enjoy!</h3>
                            <p class='how-hq-step-desc'>We ship your package within 48 hours,<br></br>freshly roasted. Sit back and enjoy<br></br>award-winning world-class coffees<br></br>curated to provide a distinct tasting<br></br>experience.</p>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Home