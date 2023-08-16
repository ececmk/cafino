
import './Header.css'
import ImageCarousel from './ImageCarousel/ImageCarousel'

const Header = () => {

    return (
        <header className='header'>
           <ImageCarousel />
           <div className='heading-wrapper'>
           <h5>Sip, Savor, Repeat: Cafino</h5>
           <h3>Unleashing the Artistry of Coffee and Wine!</h3>
          <button className='btn btn-light' onClick={() => window.location.href = '/menu'}>Discover More</button>
           </div>
          
        </header>
    )

}
export default Header;