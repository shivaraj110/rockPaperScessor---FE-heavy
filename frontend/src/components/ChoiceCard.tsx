import { compChoiceAtom, userChoiceAtom } from "../atoms/choiceAtom";
import { useSetRecoilState } from "recoil";
import handChoice from "../constants/hand";
import { calcRandomChoice } from "./Result";
export function ChoiceCard(){
    const setUserChoice  = useSetRecoilState(userChoiceAtom)
    const  setCompChoice = useSetRecoilState(compChoiceAtom)
    let ucr : handChoice = "rock"
    let ucp : handChoice = "paper"
    let ucs : handChoice = "scissors"
    return  <div className="grid grid-cols-3 col-span-2">
        <div className="col-span-3 py-3 self-center m-auto">
            choose a hand-sign
        </div>
        <div className="col-span-3 flex justify-center">
      <div className="rounded-lg bg-white w-32 text-center p-2 h-28 px-4 flex justify-center mx-3 hover:animate-pulse ">
           <div className="self-center cursor-pointer" onClick={()=>{
                      setUserChoice(c => c = ucr)
            setCompChoice(calcRandomChoice())
           }}>
            <img src='./images/icon-rock.svg' alt="" />
            <p className="text-gray-400 self-center">
                rock
            </p>
           </div>
           </div>
           <div className="rounded-lg bg-white w-32 text-center p-2 h-28 px-4 flex justify-center mx-3 hover:animate-pulse">
           <div className="self-center cursor-pointer" onClick={()=>{
            setUserChoice(c => c = ucp)
            setCompChoice(calcRandomChoice())
           }}>
            <img src='./images/icon-paper.svg' alt="" />
            <p className="text-gray-400 self-center">
                paper
            </p>
           </div>
           </div>
           <div className="rounded-lg bg-white w-32 text-center p-2 h-28 px-4 flex justify-center mx-3 hover:animate-pulse">
           <div className="self-center cursor-pointer" onClick={()=>{
                      setUserChoice(c => c = ucs)
            setCompChoice(calcRandomChoice())
           }}>
            <img src='./images/icon-scissors.svg' alt="" />
            <p className="text-gray-400 self-center">
                scissors
            </p>
           </div>
        </div>

        </div>
        </div>  
}