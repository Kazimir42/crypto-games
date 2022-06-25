import {useState} from "react";

function Machine () {

    const [firstNumber, setFirstNumber] = useState(3)
    const [secondNumber, setSecondNumber] = useState(3)
    const [thirdNumber, setThirdNumber] = useState(3)

    function run() {

    }

    return (
        <div>
            <div className="border border-2 h-64 mx-96 grid grid-cols-3 rounded">
                <div className="flex flex-col text-center h-full border border-1">
                    <div className="mt-auto mb-auto text-white text-7xl font-bold">
                        <span id="firstNumber">{firstNumber}</span>
                    </div>
                </div>
                <div className="flex flex-col text-center h-full border border-1">
                    <div className="mt-auto mb-auto text-white text-7xl font-bold">
                        <span id="secondNumber">{secondNumber}</span>
                    </div>
                </div>
                <div className="flex flex-col text-center h-full border border-1">
                    <div className="mt-auto mb-auto text-white text-7xl font-bold">
                        <span id="thirdNumber">{thirdNumber}</span>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <button className="bg-gray-200 text-2xl text-center py-2 px-4 font-semibold hover:scale-105 shadow-lg rounded duration-200" onClick={run}>Relancer</button>
            </div>
        </div>
    )
}export default Machine;