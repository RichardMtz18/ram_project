import { CharacterList } from "./components/CharacterList";
import video from '../src/assets/video/ram.mp4'


function App() {
  return (
    <main className="bg-accent flex flex-col justify-center items-center">
      <video
        autoPlay
        loop
        src={video}
        muted
        className="w-full h-full object-cover fixed top-0 left-0"
      />
      <img
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
        alt="Rick and Morty"
        className="h-60"
        style={{ zIndex: 1 }}
      />
      <CharacterList />
    </main>
  );
}

export default App;
