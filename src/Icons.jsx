import { useContext } from "react";
import "./icons.css"
import { rpsContext } from "./Context";

// eslint-disable-next-line react/prop-types
function Icons({icon, className, name}) {
    const {winner} = useContext(rpsContext)

    return (
        <div className={className} onClick={() => {
            winner(name)
        }} >
            <img src={icon} alt="icon" />
        </div>
    );
}

export default Icons;