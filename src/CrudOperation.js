import React from 'react';

class CrudOperation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata: "", myarray: [] };
    }

    handleChange(input) {
        this.setState({ mydata: input.target.value });

        // console.log(this.state.mydata)
        // console.log(input.target.value)

    }


    handleAdd() {


        if (this.state.mydata === "") {
            alert('Please Enter Value.');


        }
        else {
            // Listarray name no object bnavyo.
            let Listarray = {
                value: this.state.mydata,
                id: Date.now()
            };

            console.log(Listarray);
            let myDetails = [...this.state.myarray];

            myDetails.push(Listarray);
            this.setState({ mydata: "", myarray: myDetails });
            console.log(myDetails);
        }



    }

    handleEdit(id) {
        console.log(id);
        const text = prompt('Task Name');
        if (text === null || text === "") {

        }

        else {

            const myData2 = this.state.myarray.map((element) => {
                if (element.id === id) {
                    return {
                        ...element,
                        value: text, id: id
                    }
                }
                return element;
            })
            this.setState({ myarray: myData2 });
        }
    }

    handleDelete(id) {
        var index = this.state.myarray.filter((item) => item.id !== id);
        console.log(index);
        this.setState({ myarray: index })
    }


    render() {
        return (
            <React.Fragment>
                {this.props.name} <br />
                {this.props.age} <br />
                <input type='text' name='mydata' placeholder='Enter Data' onChange={this.handleChange.bind(this)} autoFocus />
                <input type='button' value='Add' onClick={this.handleAdd.bind(this)} />

                <h4>{this.state.myarray.map((element) =>
                    <li key={element.id}>{element.value} and {element.id}
                        <input type='button' value='Edit' onClick={() => { this.handleEdit(element.id) }} />
                        <input type='button' value='Delete' onClick={() => { this.handleDelete(element.id) }} />
                    </li>
                )}</h4>


            </React.Fragment>
        );
    }
}

export default CrudOperation;



