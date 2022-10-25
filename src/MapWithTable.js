
import React from "react";

class MapWithTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        let myarray = [
            { firstname: "Arpit", age: 85 },
            { firstname: "Pratik", age: 48 },
            { firstname: "Amit", age: 23 }
        ];

        return (
            <React.Fragment>
                <table border="1px">
                    <tr>
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>

                    {myarray.map((mydata, index) => {
                        return (

                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{mydata.firstname}</td>
                                <td>{mydata.age}</td>

                            </tr>

                        )
                    })}

                </table>

                
            </React.Fragment>
        );
    }
}

export default MapWithTable;