import "./game.css"
import triangle from "/images/bg-triangle.svg"

import Rock from "/images/icon-rock.svg"
import Paper from "/images/icon-paper.svg"
import Scissors from "/images/icon-scissors.svg"
import Icons from "./Icons";

function Game() {
    return (
        <section className="game">
            <img src={triangle} alt="triangle" className="triangle" />
            <Icons icon={ Rock } className="icon-game red" name="rock" />
            <Icons icon={ Scissors } className="icon-game yellow" name="scissors" />
            <Icons icon={ Paper } className="icon-game blue" name="paper" />
        </section>
    );
}

export default Game;