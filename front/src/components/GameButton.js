import {Link} from "react-router-dom";

function GameButton(props) {

    return (
        <Link className="bg-gray-200 text-2xl text-center py-2 px-4 font-semibold hover:scale-105 shadow-lg rounded duration-200" to={props.link}>{props.title}</Link>
    )

}export default GameButton;