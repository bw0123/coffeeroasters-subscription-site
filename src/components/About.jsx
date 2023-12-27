import Whitecup from '../assets/img/image-hero-whitecup.jpg'
import Commitment from '../assets/img/image-commitment.jpg'
import Quality from '../assets/img/image-quality.jpg'
import IconUk from '../assets/icons/IconUk'
import IconCa from '../assets/icons/IconCa'
import IconAu from '../assets/icons/IconAu'

function About() {
    return(
        <div>
            <main class='main-bg-container'>
                <img src={Whitecup} alt='image-hero-whitecup'></img>
                <div class='main-bg-txt-container'>
                    <h2>About Us</h2>
                        <p>Coffeeroasters began its journey of exotic discovery in 1999,<br></br>
                            highlighting stories of coffee from around the world. We have<br></br>
                            since been dedicated to bring the perfect cup - from bean to<br></br>
                            brew - in every shipment.
                        </p>
                </div>
            </main>
            <section class='commitment-container'>
                <img src={Commitment} alt='image-commitment'></img>
                <div class='commitment-txt-container'>
                    <h2 id='commitment-title'>Our commitment</h2>
                    <p class='commitment-label'>We’re built on a simple mission and a commitment to doing good along the<br></br>
                        way. We want to make it easy for you to discover and brew the world’s best<br></br>
                        coffee at home. It all starts at the source. To locate the specific lots we want<br></br>
                        to purchase, we travel nearly 60 days a year trying to understand the<br></br>
                        challenges and opportunities in each of these places. We collaborate with<br></br>
                        exceptional coffee growers and empower a global community of farmers<br></br>
                        through with well above fair-trade benchmarks. We also offer training, support<br></br>
                        farm community initiatives, and invest in coffee plant science. Curating only<br></br>
                        the finest blends, we roast each lot to highlight tasting profiles distinctive to<br></br>
                        their native growing region.
                    </p>
                </div>
            </section>
            <section class='quality-container'>
                <img src={Quality} alt='image-quality'></img>
                    <div class='quality-txt-container'>
                        <h3 id='quality-title'>Uncompromising quality</h3>
                            <p class='quality-desc'>Although we work with growers who pay close attention to all stages of harvest and<br></br>
                                processing, we employ, on our end, a rigorous quality control program to avoid<br></br>
                                over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast<br></br>
                                date and batch number. Our goal is to roast consistent, user-friendly coffee, so that<br></br>
                                brewing is easy and enjoyable.
                            </p>
                    </div>
            </section>
            <section class='how-hq-container'>
                <h3 class='how-hq-grey'>Our headquarters</h3>
                <div class='how-hq-flex-container'>
                        <div class='how-hq-step-container'>
                            <IconUk />
                            <h4 class='how-hq-step-label'>United Kingdom</h4>
                            <p class='how-hq-step-desc'>68  Asfordby Rd<br></br>Alcaston<br></br>SY6 1YA<br></br>+44 1241 918425</p>
                        </div>
                        <div class='how-hq-step-container'>
                            <IconCa />
                            <h4 class='how-hq-step-label'>Canada</h4>
                            <p class='how-step-desc'>1528  Eglinton Avenue<br></br>Toronto<br></br>Ontario M4P 1A6<br></br>+1 416 485 2997</p>
                        </div>
                        <div class='how-hq-step-container'>
                            <IconAu />
                            <h4 class='how-hq-step-label'>Australia</h4>
                            <p class='how-hq-step-desc'>36 Swanston Street<br></br>Kewell<br></br>Victoria<br></br>+61 4 9928 3629</p>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default About