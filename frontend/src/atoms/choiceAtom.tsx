import { atom } from "recoil";
export const userChoiceAtom = atom({
    key : 'userChoiceAtom',
    default : ""
})
export const scoreAtom = atom({
    key : "scoreAtom",
    default : 5
})
export const compChoiceAtom = atom({
        key : 'compChoiceAtom',
        default : ""
})
export const compScoreAtom = atom({
    key : "compScoreAtom",
    default : -5
})