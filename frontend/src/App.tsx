import { ChoiceCard } from './components/ChoiceCard'
import { RecoilRoot } from 'recoil'
import { Result } from './components/Result'
import { Score } from './components/Score'
function App() {
  return (
    <>
      <RecoilRoot>
    <div className="bg-slate-300 h-screen w-screen grid grid-cols-2 self-center">
      <Score/>
      <ChoiceCard/><br />
      <Result/>
    </div>
    </RecoilRoot>
    </>
  )
}

export default App
