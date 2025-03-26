import {Navbar} from "./components/Navbar";
import {Background} from "./components/Background";


const App = () => {
  return (
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          <Background/>
          <Navbar/>
      </div>
  )
}

export default App
