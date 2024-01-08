function SelectCard({ question, labelOne,  descOne, labelTwo, descTwo, labelThree,  descThree, isActive, onShow }) {
    return(
        <div>
            <div class='select-intro-flex-container'>
                <h2 class='select-question'>{question}</h2>
                <p>
                    <i class='arrow up' style={{ transform: isActive ? 'rotate(45deg)' : 'rotate(-135deg)' }}  onClick={onShow}></i>
                </p>
            </div>
            {isActive && (
                <div class='select-flex-container' >
                    <div class='select-card-container'>
                        <div class='select-card-info'>
                            <h4 class='select-label'>{labelOne}</h4>
                            <p class='select-desc'>{descOne}</p>
                        </div>
                    </div>
                    <div class='select-card-container'>
                        <div class='select-card-info'>
                            <h4 class='select-label'>{labelTwo}</h4>
                            <p class='select-desc'>{descTwo}</p>
                        </div>
                    </div>
                    <div class='select-card-container'>
                        <div class='select-card-info'>
                            <h4 class='select-label'>{labelThree}</h4>
                            <p class='select-desc'>{descThree}</p>
                        </div>
                    </div>
            </div>
            )
        }
            
        </div>
    )
}

export default SelectCard