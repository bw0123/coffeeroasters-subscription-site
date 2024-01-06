import { useState } from 'react'

function SelectCard(props) {
    const [show, setShow] = useState(true)

    const toggle = () => {
        setShow(!show)
    }

    return(
        <div class='select-flex-container'>
            <div class='select-intro-flex-container'>
                <h2 class='select-question'>{props.question}</h2>
                <p>
                    <i class='arrow up' style={{ transform: show ? 'rotate(45deg)' : 'rotate(-135deg)' }}  onClick={toggle}></i>
                </p>
            </div>
            <div class='select-card-container'>
                <div class='select-card-info'>
                    <h4 class='select-label'>{props.labelOne}</h4>
                    <p class='select-desc'>{props.descOne}</p>
                </div>
                <div class='select-card-container'>
                    <div class='select-card-info'>
                        <h4 class='select-label'>{props.labelTwo}</h4>
                        <p class='select-desc'>{props.descTwo}</p>
                    </div>
                </div>
                <div class='select-card-container'>
                    <div class='select-card-info'>
                        <h4 class='select-label'>{props.labelThree}</h4>
                        <p class='select-desc'>{props.descThree}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectCard