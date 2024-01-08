import { useState } from 'react'
import SelectCard from '../utils/SelectCard'
import { selectData } from '../utils/selectData'

function AsidePlan() {
    const [activeId, setActiveId] = useState(1)
    const [isActive, setIsActive] = useState(true)

    const handleBoth = (id) => {
        setActiveId(id)
    }

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
            <div class='aside-step-container' onClick={() => handleBoth(num.id)} key={num.id}>
                <h4 class='aside-step-id' style={{ color: activeId === num.id ? '#0E8784' : '#83888F' }}>{num.text}</h4>
                <h4 class='aside-step-label' style={{ color: activeId === num.id ? '#333D4B': '#83888F' }}>{asideLabels[num.id - 1]}</h4>
            </div>
            <hr class='aside-hr'></hr>
        </>
    )

    const listSelectData = selectData.map((select) => 
        <SelectCard 
            {...select} key={select.id}
            onShow={() => setActiveId(select.id)} 
            isActive={activeId === select.id}
        />  
    )

    return(
        <div class='aside-plan-flex-container'>
            <aside class='aside-step-col'>
                {listNumbers}
            </aside>
            <section class='select-col'>
                {listSelectData}
            </section>
        </div>
    )
}
export default AsidePlan