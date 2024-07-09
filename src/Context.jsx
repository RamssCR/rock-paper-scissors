import { createContext, useState } from "react"

export const rpsContext = createContext()

export function RpsContextProvider(props) {
    const [score, setScore] = useState(0)
    const [resultState, setResultState] = useState("")
    const [isResult, setIsResult] = useState(false)
    const [show, setShow] = useState(false)
    const [usersChoice, setUsersChoice] = useState({})
    const [timer, setTimer] = useState(1500)
    
    function winner(playerChoice) {
        if (!playerChoice) return
        const choices = ["rock", "paper", "scissors"]
        const cpuChoice = choices[Math.floor(Math.random() * choices.length)]
        
        setIsResult(true)
        setTimer(1500)
        setUsersChoice({player: playerChoice, cpu: cpuChoice})

        // Tie
        if (playerChoice === cpuChoice) {
            setResultState("MATCH TIE")
        }

        // player validations
        if (playerChoice === choices[0] && cpuChoice === choices[2]) {
            setScore(score => score + 1)
            setResultState("YOU WON")
            
        } else if (playerChoice === choices[1] && cpuChoice === choices[0]) {
            setScore(score => score + 1)
            setResultState("YOU WON")
        } else if (playerChoice === choices[2] && cpuChoice === choices[1]) {
            setScore(score => score + 1)
            setResultState("YOU WON")
        }

        // cpu validations
        if (cpuChoice === choices[0] && playerChoice === choices[2]) {
            setScore(score => score - 1)
            setResultState("YOU LOST")
        } else if (cpuChoice === choices[1] && playerChoice === choices[0]) {
            setScore(score => score - 1)
            setResultState("YOU LOST")
        } else if (cpuChoice === choices[2] && playerChoice === choices[1]) {
            setScore(score => score - 1)
            setResultState("YOU LOST")
        }
    }

    return (
        <rpsContext.Provider value={{score, setScore, winner, resultState, setResultState, setIsResult, isResult, usersChoice, show, setShow, timer}}>
            {props.children}
        </rpsContext.Provider>
    )
}