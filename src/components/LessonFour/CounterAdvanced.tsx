import {useState} from "react";
import CounterButton from "./CounterButton.tsx";


type CounterState = {
    counter: number;
    lastAction: string;
    time: string;
}

const initialState = {
    counter: 0,
    lastAction: "",
    time: "",
}


const CounterAdvanced = () => {


    const [state, setState] = useState<CounterState>(initialState);

    const getCurrentTime = () => new Date().toLocaleDateString();

    const increaseCount = () => {

        setState({
            counter: state.counter + 1,
            lastAction: "Increase",
            time: getCurrentTime(),
        })


    }

    const decreaseCount = () => {

        if (state.counter > 0) {
            setState({
                counter: state.counter - 1,
                lastAction: "Decrease",
                time: getCurrentTime(),
            })
        }

    }

    const resetCount = () => {
        setState({
            counter: 0,
            lastAction: "Reset",
            time: getCurrentTime(),
        })
    }

    return (
        <>
            <h1 className="text-center text-xl font-bold">Count is {state.counter}</h1>
            <div className="text-center pt-12 space-x-4">
                <CounterButton
                    onClick={increaseCount}
                    label="Increase"
                />

                <CounterButton
                    onClick={decreaseCount}
                    label="Decrease"
                    disabled={state.counter === 0}
                />


            </div>
            <div className="text-center pt-4">
                <CounterButton
                    onClick={resetCount}
                    label="Reset"
                    disabled={state.counter === 0}
                />
            </div>

            {
                state.lastAction && (
                    <p className="text-center pt-6">
                        Last Change: <strong>{state.lastAction}</strong> at {" "} <strong>{state.time}</strong>
                    </p>
                )
            }

        </>
    )
}

export default CounterAdvanced;