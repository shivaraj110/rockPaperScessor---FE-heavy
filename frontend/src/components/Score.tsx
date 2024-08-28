import { useRecoilValue } from "recoil";
import {
  compChoiceAtom,
  scoreAtom,
  userChoiceAtom,
} from "../atoms/choiceAtom";
export function Score() {
  const score = useRecoilValue(scoreAtom);
  const userChoice = useRecoilValue(userChoiceAtom);
  const compChoice = useRecoilValue(compChoiceAtom);
  return (
    <div className="col-span-2 self-center m-auto">
      <div className="bg-white text-gray-500 w-72 h-32 grid grid-cols-2 rounded-md pb-3">
        <div className=" bg-slate-300 w-20 h-20 justify-center self-center rounded-md col-span-1 mt-3 ml-6 ">
            <div className="text-center self-center">score</div>
          <div className="text-center self-center text-3xl">{score}</div>
        </div>
        <div className="grid grid-cols-2 ">
        <div className="col-span-2"> 
            <div className="flex justify-center mt-8 self-center  pl-4">you: <div className="col-span-1 ml-2">{userChoice}</div></div>
            </div>
            <div className="col-span-2"> 
            <div className="flex justify-center   self-center  pl-4">bot: <div className="col-span-1 ml-2">{compChoice}</div></div>
            </div>
        </div>
      </div>
    </div>
  );
}
