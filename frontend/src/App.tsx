import { useState } from 'react'
import './App.css'
import { ChoiceCard } from './components/ChoiceCard'
import { RecoilRoot } from 'recoil'
import { Result } from './components/Result'

function App() {
  return (
    <>
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <RecoilRoot><ChoiceCard/>
      <Result/></RecoilRoot>
    </div>
    </>
  )
}

export default App
