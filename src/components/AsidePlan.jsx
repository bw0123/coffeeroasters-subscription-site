import { useState } from 'react'
import SelectPlan from './SelectPlan'

function AsidePlan() {
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

    const [activeId, setActiveId] = useState(1)

    const listNumbers = numbers.map(num => 
        <>
        <div class='aside-step-container' onClick={() => setActiveId(num.id)}>
            <h4 class='aside-step-id' style={{ color: activeId === num.id ? '#0E8784' : '#83888F' }}>{num.text}</h4>
            <h4 class='aside-step-label' style={{ color: activeId === num.id ? '#333D4B': '#83888F' }}>{asideLabels[num.id - 1]}</h4>
        </div>
        <hr class='aside-hr'></hr>
        </>
    )

    return(
        <div class='aside-plan-flex-container'>
            <aside class='aside-step-col'>
                {listNumbers}
            </aside>
            <SelectPlan />
        </div>
    )
    {/*
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
    */}
}
export default AsidePlan