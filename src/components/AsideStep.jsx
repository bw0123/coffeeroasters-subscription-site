export default function AsideStep({ number, label }) {
    return(
        <div class='aside-step-container'>
            <h4 class='aside-step-number'>{number}</h4>
            <h4 class='aside-step-label'>{label}</h4>
        </div>
    )
}