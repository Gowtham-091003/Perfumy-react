import one from "../asset/images/one.jpg";
import two from "../asset/images/two.jpg";
import three from "../asset/images/three.jpg";

function Perfumelist() {
    return(
        <div className="products">
            <div class="box">
                <img src={one} alt="elite"/>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
            
            <div className="box">
                <img src= {two} alt="villain"/>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div className="box">
                <img src= {three} alt="Designs Club"/>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>
            
        </div>
    )
} 
export default Perfumelist