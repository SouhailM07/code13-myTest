// tailwind
import "./style/input.css";
import "./App.css";
// components
import { Intro, SignIn } from "./components";

function App() {
  return (
    <>
      <main className="bg-red-400 flex items-center justify-evenly">
        <Intro />
        <SignIn />
      </main>
    </>
  );
}
export default App;
