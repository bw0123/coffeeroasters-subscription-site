import { useState } from 'react'

export default function AsidePlan() {
    return(
        <div class='aside-plan-flex-container'>
            <aside class='aside-step-col'>
                <div class='aside-step-container'>
                    <h4 class='aside-step-id'>01</h4>
                    <h4 class='aside-step-label'>Preferences</h4>
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
            
            <section class='select-col'>
                <div class='select-intro-flex-container'>
                    <h2 class='select-question'>How do you drink your coffee?</h2>
                    <p><i class='arrow up'></i></p>
                </div>
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
            </section>
        </div>
    )
}

