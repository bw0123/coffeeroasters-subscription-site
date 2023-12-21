import granespresso from '../assets/icons/image-gran-espresso.png'
import planalto from '../assets/icons/image-planalto.png'
import piccollo from '../assets/icons/image-piccollo.png'
import danche from '../assets/icons/image-danche.png'

function Collection() {
    return(
        <section>
            <h1 id='our-collection'>our collection</h1>
            <div class='collection-flex-container'>
                <img src={granespresso} alt='image-gran-espresso'></img>
                <img src={planalto} alt='image-planalto'></img>
                <img src={piccollo} alt='image-piccollo'></img>
                <img src={danche} alt='image-danche'></img>
            </div>
            <div class='collection-label'>
                <h4>Gran Espresso</h4>
                <h4>Planalto</h4>
                <h4>Piccollo</h4>
                <h4>Danche</h4>
            </div>
            <div class='collection-desc'>
                <p>Light and flavorful blend with cocoa<br></br>and black pepper for an intense<br></br>experience.</p>
                <p>Brazilian dark roast with rich and<br></br>velvety body, and hints of fruits and<br></br>nuts.</p>
                <p>Mild and smooth blend featuring<br></br>notes of toasted almond and dried<br></br>cherry.</p>
                <p>Ethiopian hand-harvested blend densely packed with vibrant fruit<br></br>notes.</p>
            </div>
        </section>
    )
}

export default Collection