import Machine from "../components/Machine";

function SlotMachine() {

    return (
        <div className="container mx-auto mt-auto mb-auto">
            <h1 className="text-center text-7xl text-white font-bold">
                Slot Machine
            </h1>
            <div className="mt-24">
                <Machine />
            </div>
        </div>
    )
}
export default SlotMachine;