import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import LPodcasts from '../components/LatestPodcast';

const App = () => {
  return (
    <div className="bg-black text-white overflow-x-hidden"
        style={{backgroundImage: "linear-gradient(#0B0B0B, #0b0b0b)"}}
    >
      <Navbar />
      <Welcome />
      <LPodcasts />
    </div>
  ) 
}

export default App;


