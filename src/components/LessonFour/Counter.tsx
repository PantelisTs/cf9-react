import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increaseCount = () => {
        setCounter(counter + 1);
    }

    const decreaseCount = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
        else setCounter(counter);

    }

    const resetCount = () => {
        setCounter(0);
    }

    return (
        <>
            <h1 className="text-center text-xl font-bold">Count is {counter}</h1>
            <div className="text-center pt-12 space-x-4">
                <CounterButton
                    onClick={increaseCount}
                    label="Increase"
                />

                <CounterButton
                onClick={decreaseCount}
                label="Decrease"
                disabled={counter === 0}
                />


            </div>
            <div className="text-center pt-4">
                <CounterButton
                    onClick={resetCount}
                    label="Reset"
                    disabled={counter === 0}
                />
            </div>
        </>
    )
}

export default Counter;