import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Heroic from "./components/Heroic.jsx";

const App = () => {
  return (
    <main className="bg-black flex flex-col min-h-screen">
      <Navbar />
      <Heroic />
      <Highlights />
      
    </main>
  );
}

export default App;
