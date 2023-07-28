import "./App.css";
import emotionLogo from "./assets/emotion.png";
import reactLogo from "./assets/react.svg";
import zustandLogo from "./assets/zustand.png";
import { useStore } from "./store/Store";
import viteLogo from "/vite.svg";

function App() {
  const { count, setCount } = useStore();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://zustand-demo.pmnd.rs/" target="_blank">
          <img src={zustandLogo} className="logo zustand" alt="Zustand logo" />
        </a>
        <a href="https://emotion.sh" target="_blank">
          <img src={emotionLogo} className="logo emotion" alt="Emotion logo" />
        </a>
      </div>
      <h1>Vite + React + Zustand + Emotion</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
