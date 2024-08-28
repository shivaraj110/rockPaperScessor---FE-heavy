import { useRecoilValue, useSetRecoilState } from "recoil";
import  {compArr} from "../constants/hand";
import { compChoiceAtom, compScoreAtom, scoreAtom, userChoiceAtom } from "../atoms/choiceAtom";
import { useEffect } from "react";
export const calcRandomChoice = () : any => {
    const randomIndex = Math.floor(((Math.random()*9))/3)
    const compChoice = compArr[randomIndex].handSign
    return compChoice
}
export function Result(){

const setScore = useSetRecoilState(scoreAtom)
const setCompScore = useSetRecoilState(compScoreAtom)

const result = (cch : any , uch : any) : boolean=>{
    let res:boolean
    switch(uch){
        case "rock" : cch === "paper" ? res = false : res  = true
        break
        case "paper" : cch === "scissors" ? res = false : res = true
        break
        case "scissors" : cch === "rock" ? res = false : res = true
        break
        default : res = false
}
return res
}


const userChoice : any = useRecoilValue(userChoiceAtom)
const cch = useRecoilValue(compChoiceAtom)
const fres = result(cch,userChoice)
const updateScore = (incr) => {
    incr ? setScore( score => score + 5) : setScore( score => score - 5 )
    incr ? setCompScore( score => score - 5) : setCompScore( score => score + 5 )
}


    useEffect(()=>{
        updateScore(fres)  
      },[cch,userChoice])
      return <div>
      </div>
}