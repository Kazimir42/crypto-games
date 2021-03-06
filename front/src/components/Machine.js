import {useEffect, useState} from "react";

function Machine() {

    const [firstNumber, setFirstNumber] = useState(3)
    const [secondNumber, setSecondNumber] = useState(3)
    const [thirdNumber, setThirdNumber] = useState(3)
    const [wining, setWining] = useState(false)
    const [drawing, setDrawing] = useState(false)
    const [address, setAddress] = useState('0xC5eE86ddC2A8aA2a8578A1c6d5EAe43c95eb09d5')
    const [bet, setBet] = useState(0.1)
    const [earnings, setEarnings] = useState(0)
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        //GET address with total balance in DB

        fetch('http://localhost:3001/addresses/' + address)
            .then(response => response.json())
            .then(data => {
                setBalance(data.balance)
            });

    });

    function run() {
        if (!drawing) {
            setDrawing(true);
            setEarnings(0)

            fetch('http://localhost:3001/slot-machines/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    address: address,
                    bet: bet,
                }),
            })
                .then(response => response.json())
                .then(data => {

                    console.log(data);

                    let interval = setInterval(() => {
                        setFirstNumber(randomNumber)
                        setSecondNumber(randomNumber)
                        setThirdNumber(randomNumber)
                    }, 150);

                    setTimeout(() => {
                        stop(interval);
                        setFirstNumber(data.result[0])
                        setSecondNumber(data.result[1])
                        setThirdNumber(data.result[2])
                        setEarnings(data.earnings)

                        if (data.wining) {
                            setWining(true);
                            let audio = new Audio(process.env.PUBLIC_URL + '/sounds/wining-sound.mp3');
                            audio.play();
                        } else {
                            setWining(false);
                        }

                        setDrawing(false);
                    }, 1000);

                });
        }

    }

    function randomNumber() {
        let rand = Math.random();
        rand *= 3;
        rand = Math.floor(rand) + 1;
        return rand;
    }

    function stop(interval) {
        clearInterval(interval)
        return true;
    }

    function WiningModal() {
        return (
            <div className="bg-opacity-30 bg-stone-900 absolute top-0 left-0 w-full h-full flex flex-col">
                <div
                    className="bg-gray-800 text-white backdrop-blur-3xl inline-block mt-auto mb-auto mx-auto shadow-2xl rounded h-56 w-96 flex flex-col gap-2 p-4">
                    <p className="text-center text-3xl font-bold">You win</p>
                    <p className="text-center text-lg mt-auto mb-auto">+ {earnings} ETH</p>
                    <button
                        className="bg-gray-200 text-2xl text-gray-900 text-center py-2 mt-auto px-4 font-semibold hover: shadow-lg rounded duration-200"
                        onClick={x => setWining(false)}>Ok
                    </button>
                </div>
            </div>
        )
    }


    return (
        <div>

            {
                wining ? <WiningModal/> : ''
            }

            <div>

            </div>
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
                <button
                    className="bg-gray-200 text-2xl text-center py-2 px-4 font-semibold hover:scale-105 shadow-lg rounded duration-200"
                    onClick={run}>Relancer
                </button>
            </div>
        </div>
    )
}

export default Machine;