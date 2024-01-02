export default function AsideStep({ id, label }) {
    return(
        <div class='aside-step-container'>
            <h4 class='aside-step-id'>{id}</h4>
            <h4 class='aside-step-label'>{label}</h4>
        </div>
    )
}