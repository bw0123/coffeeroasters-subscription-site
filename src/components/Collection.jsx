import Granespresso from '../assets/icons/image-gran-espresso.png'
import Planalto from '../assets/icons/image-planalto.png'
import Piccollo from '../assets/icons/image-piccollo.png'
import Danche from '../assets/icons/image-danche.png'

function Collection() {
    return(
        <section>
            <h1 id='our-collection'>our collection</h1>
                <div class='collection-flex-container'>
                    <div class='collection-item-container'>
                        <img src={Granespresso} alt='image-gran-espresso'></img>
                        <h4 class='collection-label'>Gran Espresso</h4>
                        <p class='collection-desc'>Light and flavorful blend with cocoa<br></br>and black pepper for an intense<br></br>experience.</p>
                    </div>
                    <div class='collection-item-container'>
                        <img src={Planalto} alt='image-planalto'></img>
                        <h4 class='collection-label'>Planalto</h4>
                        <p class='collection-desc'>Brazilian dark roast with rich and<br></br>velvety body, and hints of fruits and<br></br>nuts.</p>
                    </div>
                    <div class='collection-item-container'>
                        <img src={Piccollo} alt='image-piccollo'></img>
                        <h4 class='collection-label'>Piccollo</h4>
                        <p class='collection-desc'>Mild and smooth blend featuring<br></br>notes of toasted almond and dried<br></br>cherry.</p>
                    </div>
                    <div class='collection-item-container'>
                        <img src={Danche} alt='image-danche'></img>
                        <h4 class='collection-label'>Danche</h4>
                        <p class='collection-desc'>Ethiopian hand-harvested blend<br></br>densely packed with vibrant fruit<br></br>notes.</p>
                    </div>
                </div>
        </section>
    )
}

export default Collection