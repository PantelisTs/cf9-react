import {Component} from "react";
import CounterButton from "./CounterButton.tsx";

type State = {
    count: number;
}

class ClassCounter extends Component<{}, State> {
    constructor(props:{}) {
        super(props);
        this.state = {count:0};
    }

    increaseCount = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <>
                <h1 className="text-center text-xl font-bold">Count is {this.state.count}</h1>
                <div className="text-center pt-12 space-x-4">
                    <CounterButton
                        onClick={this.increaseCount}
                        label="Increase"
                    />
                </div>
            </>
        )
    }

}

export default ClassCounter;