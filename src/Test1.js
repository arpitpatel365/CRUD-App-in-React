import React from "react";

class Test1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var arr = [1, 2, 3, 4, 5];

        return (
            <React.Fragment>
                {/* {arr.map(function (element, index, arr) {
                    return (<div> {("element " + element + " at index " + index + " on array " + arr)}</div>);
                })} */}

                {arr.map(function (element, index, arr) {
                    return (<h5> {("element " + element + " at index " + index + " on array " + arr)}</h5>);
                })}
            </React.Fragment>
        );
    }
}

export default Test1;

