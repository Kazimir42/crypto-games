
import GameButton from "../components/GameButton";

function Home() {


    return (
        <div className="container mx-auto mt-auto mb-auto">
            <h1 className="text-center text-7xl text-white font-bold">
                Crypto Games
            </h1>
            <div className="grid grid-cols-1 gap-3 mt-24 w-96 mx-auto">
                <GameButton title="Slot machine" link="/slot-machine" />
                <GameButton title="..." link="/" />
                <GameButton title="..." link="/" />
            </div>
        </div>
    )
}
export default Home;