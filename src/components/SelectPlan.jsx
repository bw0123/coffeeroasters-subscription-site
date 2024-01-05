import { useState } from 'react'
import SelectCard from '../utils/SelectCard'

function SelectPlan() {
    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }

    return(
        <section class='select-col'>
                <div class='select-intro-flex-container' onClick={toggle}>
                    <h2 class='select-question'>How do you drink your coffee?</h2>
                    <p><i class='arrow up' style={{ transform: show ? 'rotate(45deg)' : 'rotate(-135deg)' }}>
                    </i></p>
                </div>
                {show && <SelectCard />}   
            </section>
    )
}

export default SelectPlan