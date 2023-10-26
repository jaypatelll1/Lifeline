import MainNavbar from '../components/MainNavbar'
import MainContent from '../components/Home/MainContent';
import BloodBankCard from '../components/Home/BloodBankCard';
import Footer from '../components/Footer';
import Hero from '../components/Home/Hero'
import "../App.css"
function Home() {
  
  return (
   <>
   <MainNavbar/>
   <Hero/>
   <BloodBankCard/>
   <MainContent/>
   <Footer/>
   </>
  );
}

export default Home;
