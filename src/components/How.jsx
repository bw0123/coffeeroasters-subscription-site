import StepsOval from '../assets/icons/Oval'

function How() {
    return(
        <section class='how-container'>
            <h3 id='how-it-works'>How it works</h3>
                <hr></hr>
                <div class='how-flex-container'>
                    <div class='how-step-container'>
                        <StepsOval/>
                        <h1 class='how-step-number'>01</h1>
                        <h3 class='how-step-label'>Pick your<br></br>coffee</h3>
                        <p class='how-step-desc'>Select from our evolving range of artisan<br></br>coffees. Our beans are ethically sourced<br></br>and we pay fair prices for them. There are<br></br>new coffees in all profiles every month<br></br>for you to try out.</p>
                    </div>
                    <div class='how-step-container'>
                        <StepsOval/>
                        <h1 class='how-step-number'>02</h1>
                        <h3 class='how-step-label'>Choose the<br></br>frequency</h3>
                        <p class='how-step-desc'>Select from our evolving range of artisan<br></br>coffees. Our beans are ethically sourced<br></br>and we pay fair prices for them. There are<br></br>new coffees in all profiles every month<br></br>for you to try out.</p>
                    </div>
                    <div class='how-step-container'>
                        <StepsOval/>
                        <h1 class='how-step-number'>03</h1>
                        <h3 class='how-step-label'>Pick your<br></br>coffee.</h3>
                        <p class='how-step-desc'>Customize your order frequency,<br></br>quantity, even your roast style and grind<br></br>type. Pause, skip or cancel your<br></br>subscription with no commitment<br></br>through our online portal.</p>
                    </div>
                </div>
        </section>
    )
}

export default How