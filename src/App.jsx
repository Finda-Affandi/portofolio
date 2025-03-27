import {Background} from "./components/Background";
import {Container} from "./components/Containers.jsx";
import {COLOR} from "./constants/UIConfig.jsx";


const App = () => {
  return (
      <div
          style={{
              "--primary-color": COLOR.primary,
              "--secondary-color": COLOR.secondary,
              "--background-color": COLOR.background,
              "--surface-color": COLOR.surface,
              "--idleButton-color": COLOR.idleButton,
              "--foreground-color": COLOR.foreground,
          }}
          className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
          <div className="flixed top-0 -z-10 h-full w-full"></div>
          <Background/>
          <Container/>
      </div>
  )
}

export default App
