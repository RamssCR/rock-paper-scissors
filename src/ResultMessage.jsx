import { useContext } from "react";
import "./resultMessage.css"
import { rpsContext } from "./Context";

// eslint-disable-next-line react/prop-types
function ResultMessage({className}) {
    const {resultState, setIsResult, setShow} = useContext(rpsContext)
    return (
        <div className={className}>
            <h2 className="message">{resultState}</h2>
            <button className="retry" onClick={() => {
                setIsResult(false)
                setShow(false)
            }}>PLAY AGAIN</button>
        </div>
    );
}

export default ResultMessage;