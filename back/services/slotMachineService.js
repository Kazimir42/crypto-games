
class slotMachineService {

    runMachine() {
        let resultArray = [];

        for (let i = 0; i < 3; i++ ) {
            let rand = Math.random();
            rand *= 3;
            rand = Math.floor(rand) + 1;
            resultArray.push(rand);
        }

        return resultArray;
    }

    isWining(result)  {
        return result.every( (val, i, arr) => val === arr[0] )
    }
}
module.exports = slotMachineService;
