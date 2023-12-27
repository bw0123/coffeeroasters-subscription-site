import Blackcup from '../assets/img/image-hero-blackcup.jpg'
import StepsOval from '../assets/icons/Oval'

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
            
        </div>
        
    )
}

export default CreatePlan