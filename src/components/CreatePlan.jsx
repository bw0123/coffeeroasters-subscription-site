import { useState } from 'react'
import Blackcup from '../assets/img/image-hero-blackcup.jpg'
import StepsOvalDark from '../assets/icons/OvalDarkFill'

function CreatePlan() {
    return(
        <div>
            <main class='main-bg-container'>
                <img src={Blackcup} alt='image-hero-blackcup'></img>
                <div class='main-bg-txt-container'>
                    <h1>Create a plan</h1>
                        <p>Build a subscription plan that best fits your needs. We offer an<br></br> 
                            assortment of the best artisan coffees from around the globe<br></br>
                            delivered fresh to your door.
                        </p>
                </div>
            </main>
            <section class='how-container-dark'>  
                <div class='how-plan-content-margin'>
                    <hr class='hr-shared' id='hr-dark'></hr>
                    <div class='how-flex-container-dark'>
                        <div class='how-hq-step-container'>
                            <StepsOvalDark />
                                <h1 class='how-step-number'>01</h1>
                                <h3 class='how-step-label-dark'>Pick your<br></br>coffee</h3>
                                <p class='how-step-desc-dark'>Select from our evolving range of artisan<br></br>coffees. Our beans are ethically sourced<br></br>and we pay fair prices for them. There are<br></br>new coffees in all profiles every month<br></br>for you to try out.</p>
                        </div>
                        <div class='how-hq-step-container'>
                            <StepsOvalDark />
                                <h1 class='how-step-number'>02</h1>
                                <h3 class='how-step-label-dark'>Choose the<br></br>frequency</h3>
                                <p class='how-step-desc-dark'>Customize your order frequency,<br></br>quantity, even your roast style and grind<br></br>type. Pause, skip or cancel your<br></br>subscription with no commitment<br></br>through our online portal.</p>
                        </div>
                        <div class='how-hq-step-container'>
                            <StepsOvalDark />
                                <h1 class='how-step-number'>03</h1>
                                <h3 class='how-step-label-dark'>Receive and<br></br>enjoy!</h3>
                                <p class='how-step-desc-dark'>We ship your package within 48 hours,<br></br>freshly roasted. Sit back and enjoy<br></br>award-winning world-class coffees<br></br>curated to provide a distinct tasting<br></br>experience.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class='aside-plan-flex-container'>
                <aside class='aside-step-col'>
                        <div class='aside-step-container'>
                            <h4 class='aside-step-id' >01</h4>
                            <h4 class='aside-step-label' >Preferences</h4>
                        </div>
                        <hr class='aside-hr'></hr>
                        <div class='aside-step-container'>
                            <h4 class='aside-step-id'>02</h4>
                            <h4 class='aside-step-label'>Bean Type</h4>
                        </div>
                        <hr class='aside-hr'></hr>
                        <div class='aside-step-container'>
                            <h4 class='aside-step-id'>03</h4>
                            <h4 class='aside-step-label'>Quantity</h4>
                        </div>
                        <hr class='aside-hr'></hr>
                        <div class='aside-step-container'>
                            <h4 class='aside-step-id'>04</h4>
                            <h4 class='aside-step-label'>Grind Option</h4>
                        </div>
                        <hr class='aside-hr'></hr>
                        <div class='aside-step-container'>
                            <h4 class='aside-step-id'>05</h4>
                            <h4 class='aside-step-label'>Deliveries</h4>
                        </div>
                </aside>
                <section class='plan-col'>
                    <div class='select-container'>
                        <h2 class='select-question'>How do you drink your coffee?</h2>
                        <div class='select-flex-container'>
                            <div class='select-card-container'>
                                <div class='select-card-info'>
                                    <h4 class='select-label'>Capsule</h4>
                                    <p class='select-desc'>Compatible with<br></br>Nespresso systems and<br></br>similar brewers</p>
                                </div>
                            </div>
                            <div class='select-card-container'>
                                <div class='select-card-info'>
                                    <h4 class='select-label'>Filter</h4>
                                    <p class='select-desc'>Pour over or drip<br></br>methods like Aeropress,<br></br>Chemex, and V60</p>
                                </div>
                            </div>
                            <div class='select-card-container'>
                                <div class='select-card-info'>
                                    <h4 class='select-label'>Espresso</h4>
                                    <p class='select-desc'>Dense and finely ground<br></br>beans for an intense,<br></br>flavorful experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CreatePlan