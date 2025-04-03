import {Background} from "./components/Background";
import {Container} from "./components/Containers";
import {COLOR} from "./constants/UIConfig";


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
          className="overflow-x-hidden text-[var(--foreground-color)] antialiased selection:bg-[var(--secondary-color)] selection:text-[var(--foreground-color)]">
          <div className="fixed top-0 -z-10 h-full w-full pointer-events-auto">
              <Background/>
          </div>
          <Container/>
      </div>
  )
}

export default App
