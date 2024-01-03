import { useState } from 'react'

function AsidePlan() {
    let asideItems = [
        "01",
        "02",
        "03",
        "04",
        "05",
    ]
    const [activeIndex, setActiveIndex] = useState(null)

    const changeStep = (e, index) => {
        console.log({ e })
        setActiveIndex(index)
    }

    return asideItems.map((value, index) => {
        return(
            <>
                <div class='aside-step-container' onClick={(e) => changeStep(e, index)}>  
                    <h4 class='aside-step-id' style={{ color: activeIndex === index ? '#0E8784' : '#83888F' }}>{value}</h4>
                    <h4 class='aside-step-label'></h4>
                </div>
                <hr class='aside-hr'></hr>
            </>
        )
    })

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