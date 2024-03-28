import { useState } from 'react'

function AsidePlan() {
    const [activeId, setActiveId] = useState(1)
    const [isActive, setIsActive] = useState(true)
    const [preference, setPreference] = useState('')

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

    const listNumbers = numbers.map((num) => 
        <>
            <div class='aside-step-container' onClick={() => setActiveId(num.id)} key={num.id}>
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

            <section class='select-col'>
                <div>
                    <div class='select-intro-flex-container'>
                        <h2 class='select-question'>How do you drink your coffee?</h2>
                        <p>
                            <i class='arrow up' style={{ transform: activeId === 1 ? 'rotate(45deg)' : 'rotate(-135deg)' }}></i>
                        </p>
                    </div>
                    {activeId === 1 && (
                        <div class='select-flex-container'>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label'>Capsule</h4>
                                <p class='select-desc'>Compatible with Nespresso systems and similar brewers</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label'>Filter</h4>
                                <p class='select-desc'>Pour over or drip methods like Aeropress, Chemex, and V60</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label'>Espresso</h4>
                                <p class='select-desc'>Dense and finely ground beans for an intense, flavorful experience</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div class='order-summary-container'>
                    <div class='order-summary-content'>
                        <p>ORDER SUMMARY</p>
                        <h4>"I drink my coffee as {preference}, with a _ type of bean. _ ground ala _, sent to me _."</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AsidePlan