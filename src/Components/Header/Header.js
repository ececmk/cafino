
import './Header.css'
import ImageCarousel from './ImageCarousel/ImageCarousel'

const Header = () => {

    return (
        <header>
           <ImageCarousel />
           <div className='heading-wrapper'>
           <h5>Sip, Savor, Repeat: Cafino</h5>
           <h3>Unleashing the Artistry of Coffee and Wine!</h3>
           <button><a href='/menu'>Discover More</a></button>
           </div>
          
        </header>
    )

}
export default Header;