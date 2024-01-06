import { useState } from 'react'
import SelectCard from '../utils/SelectCard'

function AsidePlan() {
    const [activeId, setActiveId] = useState(1)
    const [show, setShow] = useState(true)

    const numbers = [
        {id: 1, text: "01" },
        {id: 2, text: "02"},
        {id: 3, text: "03"},
        {id: 4, text: "04"},
        {id: 5, text: "05"},
    ]

    let asideLabels = [
        "Preferences",
        "Bean Type",
        "Quantity",
        "Grind Option",
        "Deliveries"
    ]

    const listNumbers = numbers.map(num => 
        <>
            <div class='aside-step-container' onClick={() => setActiveId(num.id)}>
                <h4 class='aside-step-id' style={{ color: activeId === num.id ? '#0E8784' : '#83888F' }}>{num.text}</h4>
                <h4 class='aside-step-label' style={{ color: activeId === num.id ? '#333D4B': '#83888F' }}>{asideLabels[num.id - 1]}</h4>
            </div>
            <hr class='aside-hr'></hr>
        </>
    )

    const toggle = () => {
        setShow(!show)
    }

    return(
        <div class='aside-plan-flex-container'>
            <aside class='aside-step-col'>
                {listNumbers}
            </aside>
            <section class='select-col'>
                <div class='select-intro-flex-container'>
                    <h2 class='select-question'>How do you drink your coffee?</h2>
                    <p>
                        <i class='arrow up' style={{ transform: show ? 'rotate(45deg)' : 'rotate(-135deg)' }}  onClick={toggle}></i>
                    </p>
                </div>
                {show && <SelectCard />}   
            </section>
        </div>
    )
}
export default AsidePlan