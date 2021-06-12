import './App.css';
import Listing from './components/Listing';
import listingData from './components/Listing.const';

function App() {

  return (
    <div className="App">
      <Listing items={listingData} />
    </div>
  );
}

export default App;
