import CounterButton from "../LessonFour/CounterButton.tsx";
import {useCounter} from "../../hooks/useCounter.ts"



const CounterWithCustomHook = () => {


    const {count, lastAction, time, increase, decrease, reset} = useCounter();

    return (
        <>
            <h1 className="text-center text-xl font-bold">Count is {count}</h1>
            <div className="text-center pt-12 space-x-4">
                <CounterButton
                    onClick={increase}
                    label="Increase"
                />

                <CounterButton
                    onClick={decrease}
                    label="Decrease"
                    disabled={count === 0}
                />




            </div>
            <div className="text-center pt-4">
                <CounterButton
                    onClick={reset}
                    label="Reset"
                    disabled={count === 0}
                />
            </div>

            {
                lastAction && (
                    <p className="text-center pt-6">
                        Last Change: <strong>{lastAction}</strong> at {" "} <strong>{time}</strong>
                    </p>
                )
            }

        </>
    )
}

export default CounterWithCustomHook;