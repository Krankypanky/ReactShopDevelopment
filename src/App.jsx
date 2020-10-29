import React from "react";
import Navigation from "./Components/Navigation";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navTitle: ""
        }

    }


    render() {
        console.log("rerender");

        const { navTitle } = this.state;

        return <div>
            <h1>React Shop</h1>

            <div style={{ marginTop: "3rem" }}>
                
                <Navigation navTitle={navTitle} />

                <input
                    type="text"
                    value={navTitle}
                    onChange={(event) => this.setState({
                        navTitle: event.target.value
                    })}
                />
            </div>

        </div>
    }

}