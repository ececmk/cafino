
import './Header.css'
import ImageCarousel from './ImageCarousel/ImageCarousel'

const Header = () => {

    return (
        <header>
           <ImageCarousel />
           <div className='heading-wrapper'>
           <h5>Sip, Savor, Repeat: Cafino</h5>
           <h3>Unleashing the Artistry of Coffee and Wine!</h3>
           <a href='/menu'><button className='btn-light'>Discover More</button></a>
           </div>
          
        </header>
    )

}
export default Header;