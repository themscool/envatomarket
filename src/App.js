import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import Footer from './components/Footer';

function App() {
  return (
   <>
   <div className="main bg-[#ebedf4]">
     <Header/>
     <Banner/>
     <CategoryList/>
     <Footer/>
   </div>
   </>
  );
}

export default App;
