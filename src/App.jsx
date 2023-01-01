import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './style/style.css';

function App() {
  return (<>
    <div className="app container mx-auto px-2 md:px-16 lg:px-36">
      <Navbar />
      <Hero/>
    </div>
  </>
  );
}

export default App;
