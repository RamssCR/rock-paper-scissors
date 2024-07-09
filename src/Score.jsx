import { useContext } from "react";
import "./score.css"
import { rpsContext } from "./Context";

function Score() {
    const {score} = useContext(rpsContext)
    return (
        <article className="score-container">
            <div className="game-mode">
                <h2>ROCK</h2>
                <h2>PAPER</h2>
                <h2>SCISSORS</h2>
            </div>

            <div className="score-c">
                <span className="score-title">SCORE</span>
                <span className="score-value">{score}</span>
            </div>
        </article>
    );
}

export default Score;