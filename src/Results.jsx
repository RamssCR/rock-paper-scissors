import Icons from "./Icons";
import Rock from "/images/icon-rock.svg"
import Paper from "/images/icon-paper.svg"
import Scissors from "/images/icon-scissors.svg"
import "./results.css"
import ResultMessage from "./ResultMessage";
import { useContext, useState, useEffect } from "react";
import { rpsContext } from "./Context";

// eslint-disable-next-line react/prop-types
function Results() {
    const [playerIcon, setPlayerIcon] = useState(null)
    const [playerIconColor, setPlayerIconColor] = useState("")
    const [cpuIcon, setCpuIcon] = useState(null)
    const [cpuIconColor, setCpuIconColor] = useState("")
    const {usersChoice, show, setShow, timer} = useContext(rpsContext)

    setTimeout(() => setShow(true), timer)

    // player icon and color
    useEffect(() => {
        // player icon and color
        if (usersChoice.player === "rock") {
            setPlayerIcon(Rock);
            setPlayerIconColor("red");
        } else if (usersChoice.player === "paper") {
            setPlayerIcon(Paper);
            setPlayerIconColor("blue");
        } else if (usersChoice.player === "scissors") {
            setPlayerIcon(Scissors);
            setPlayerIconColor("yellow");
        }

        // cpu icon and color
        if (usersChoice.cpu === "rock") {
            setCpuIcon(Rock);
            setCpuIconColor("red popup");
        } else if (usersChoice.cpu === "paper") {
            setCpuIcon(Paper);
            setCpuIconColor("blue popup");
        } else if (usersChoice.cpu === "scissors") {
            setCpuIcon(Scissors);
            setCpuIconColor("yellow popup");
        }
    }, [usersChoice]);

    return (<>
        <section className="results-container">
            <div className="player-choice">
                <span className="picked-dt">YOU PICKED</span>
                <div className="icon-display ">
                    <Icons icon={playerIcon} className={`${playerIconColor} size`} name="" />
                </div>
                <span className="picked-mb">YOU PICKED</span>
            </div>
            {show && <ResultMessage className="result-message-container dt" />}
            <div className="cpu-choice">
                <span className="picked-dt">THE HOUSE PICKED</span>
                <div className="icon-display">
                    <Icons icon={cpuIcon} className={`${cpuIconColor} size`} name="" />
                </div>
                <span className="picked-mb">THE HOUSE PICKED</span>
            </div>
        </section>
        {show && <ResultMessage className="result-message-container mb" />}
    </>);
}

export default Results;