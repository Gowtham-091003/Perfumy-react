import Navbar from './components/Navbar.js';
import SearchBar from './components/SearchBar.js';
import Perfumelist from './components/Perfumelist.js';
import Aboutus from './components/Aboutus.js';
import Footer from './components/Footer.js';

function App() {
    return(
        <div>
            <Navbar></Navbar>
            <SearchBar></SearchBar>
            <Perfumelist></Perfumelist>
            <Aboutus></Aboutus>
            <Footer></Footer>
        </div>
    )
}
export  default App