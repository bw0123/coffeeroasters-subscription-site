import Coffeebean from '../assets/icons/IconCoffeeBean'
import Gift from '../assets/icons/IconGift'
import Truck from '../assets/icons/IconTruck'

function WhyChoose() {
    return(
        <section class='why-choose-container'>
            <div class='why-choose-txt-container'>
                <h2 id='why-choose-title'>Why choose us?</h2>
                    <p>A large part of our role is choosing which particular coffees will be feature<br></br>
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
    )
}

export default WhyChoose