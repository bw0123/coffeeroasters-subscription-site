import { useState } from 'react'

function AsidePlan() {
    const [activeId, setActiveId] = useState(1)
    const [preference, setPreference] = useState('Capsule')
    const [bean, setBean] = useState('Wholebean')
    const [quantity, setQuantity] = useState('250g')
    const [grind, setGrind] = useState('Wholebean')
    const [deliveries, setDeliveries] = useState('Every Week')

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

    let updatePreference = (e) => {
        if(preference != e.target.textContent) {
            setPreference(e.target.textContent)
        }
    }

    let updateBean = (e) => {
        if(bean != e.target.textContent) {
            setBean(e.target.textContent)
        }
    }

    let updateQuantity = (e) => {
        if(quantity != e.target.textContent) {
            setQuantity(e.target.textContent)
        }
    }

    let updateGrind = (e) => {
        if(grind != e.target.textContent) {
            setGrind(e.target.textContent)
        }
    }
    
    let updateDeliveries = (e) => {
        if(deliveries != e.target.textContent) {
            setDeliveries(e.target.textContent)
        }
    }

    return(
        <div class='aside-plan-flex-container'>
            <aside class='aside-step-col'>
                {listNumbers}
            </aside>
            <section class='select-col'>
                <div>
                    <div class='select-intro-flex-container'>
                        <h2 class='select-question' onClick={() => setActiveId(1)}>How do you drink your coffee?</h2>
                        <p>
                            <i class='arrow up' onClick={() => setActiveId(1)} style={{ transform: activeId === 1 ? 'rotate(45deg)' : 'rotate(-135deg)' }}></i>
                        </p>
                    </div>
                    {activeId === 1 && (
                        <div class='select-flex-container'>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updatePreference}>Capsule</h4>
                                <p class='select-desc'>Compatible with Nespresso systems and similar brewers</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updatePreference}>Filter</h4>
                                <p class='select-desc'>Pour over or drip methods like Aeropress, Chemex, and V60</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updatePreference}>Espresso</h4>
                                <p class='select-desc'>Dense and finely ground beans for an intense, flavorful experience</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div>
                    <div class='select-intro-flex-container'>
                        <h2 class='select-question' onClick={() => setActiveId(2)}>What type of coffee?</h2>
                        <p>
                            <i class='arrow up' onClick={() => setActiveId(2)} style={{ transform: activeId === 2 ? 'rotate(45deg)' : 'rotate(-135deg)' }}></i>
                        </p>
                    </div>
                    {activeId === 2 && (
                        <div class='select-flex-container'>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateBean}>Wholebean</h4>
                                <p class='select-desc'>Best choice if you cherish the full sensory experience</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateBean}>Filter</h4>
                                <p class='select-desc'>For drip or pour-over coffee methods such as V60 or Aeropress</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateBean}>Cafetiére</h4>
                                <p class='select-desc'>Course ground beans specially suited for french press coffee</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div>
                    <div class='select-intro-flex-container'>
                        <h2 class='select-question' onClick={() => setActiveId(3)}>How much would you like?</h2>
                        <p>
                            <i class='arrow up' onClick={() => setActiveId(3)} style={{ transform: activeId === 3 ? 'rotate(45deg)' : 'rotate(-135deg)' }}></i>
                        </p>
                    </div>
                    {activeId === 3 && (
                        <div class='select-flex-container'>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateQuantity}>250g</h4>
                                <p class='select-desc'>Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateQuantity}>500g</h4>
                                <p class='select-desc'>Perfect option for a couple. Yields about 40 delectable cups.</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateQuantity}>1000g</h4>
                                <p class='select-desc'>Perfect for offices and events. Yields about 90 delightful cups.</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div>
                    <div class='select-intro-flex-container'>
                        <h2 class='select-question' onClick={() => setActiveId(4)}>Want us to grind them?</h2>
                        <p>
                            <i class='arrow up' onClick={() => setActiveId(4)} style={{ transform: activeId === 4 ? 'rotate(45deg)' : 'rotate(-135deg)' }}></i>
                        </p>
                    </div>
                    {activeId === 4 && (
                        <div class='select-flex-container'>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateGrind}>Wholebean</h4>
                                <p class='select-desc'>For drip or pour-over coffee methods such as V60 or Aeropress</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateGrind}>Filter</h4>
                                <p class='select-desc'>Pour over or drip methods like Aeropress, Chemex, and V60</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateGrind}>Cafetiére</h4>
                                <p class='select-desc'>Course ground beans specially suited for french press coffee</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div>
                    <div class='select-intro-flex-container'>
                        <h2 class='select-question' onClick={() => setActiveId(5)}>How often should we deliver?</h2>
                        <p>
                            <i class='arrow up' onClick={() => setActiveId(5)} style={{ transform: activeId === 5 ? 'rotate(45deg)' : 'rotate(-135deg)' }}></i>
                        </p>
                    </div>
                    {activeId === 5 && (
                        <div class='select-flex-container'>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateDeliveries}>Every Week</h4>
                                <p class='select-desc'>$7.20 per shipment. Includes free first-class shipping.</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateDeliveries}>Every 2 Weeks</h4>
                                <p class='select-desc'>$9.60 per shipment. Includes free priority shipping.</p>
                            </div>
                        </div>
                        <div class='select-card-container'>
                            <div class='select-card-info'>
                                <h4 class='select-label' onClick={updateDeliveries}>Every Month</h4>
                                <p class='select-desc'>$12.00 per shipment. Includes free priority shipping.</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div class='order-summary-container'>
                    <div class='order-summary-content'>
                        <p>ORDER SUMMARY</p>
                        <h4>"I drink my coffee as {preference}, with a {bean} type of bean. {quantity} ground ala {grind}, sent to me {deliveries}."</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default AsidePlan