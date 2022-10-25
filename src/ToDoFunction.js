import React from "react";


function ToDoFunction() {
    const [mydata, setMydata] = React.useState('');
    const [array, setArray] = React.useState([]);



    const handleChange = (e) => {
        setMydata(e.target.value);
    }

   

    const handleClick = (e) => {

        if (mydata === "" || mydata === null) {
            alert('Please enter value.');
        }
        else {

            let LisArray = {
                value: mydata,
                id: Date.now()
            };
            array.push(LisArray);

            setArray(array)
            setMydata('')
            console.log(array)
            e.preventDefault()
        }
    }

    const handleEdit = (id) => {
        console.log(id);
        var message = prompt("Enter value below to update :");
        if (message=== "" ||message === null) {

        }
        else{
        const updated_array = array.map((item1) => {
            if (item1.id === id) {
                return {
                    ...array,
                    value: message, id: id
                }
            }
            return item1;
        })
        setArray(updated_array)
        console.log(updated_array);
    }
    }



    const handleDelete = (id) => {
        var index = array.filter((element) => element.id !== id);
        setArray(index);
        console.log(index)
    }

    

    return (
        <React.Fragment>
                <h1>CRUD Application</h1>
            <input placeholder="Enter data" onChange={handleChange} value={mydata} />
            <button onClick={handleClick} >ADD</button> <br/> <br/>
           
           
          <ol type="1">  {array.map((item) =>
                    
                <li key={item.id}>
                    {item.value} and ID is {item.id}
                    <input type='button' value='Edit' onClick={() => handleEdit(item.id)} />
                    <input type='button' value='Delete' onClick={() => { handleDelete(item.id) }} />
                </li>
            )}

</ol>
        </React.Fragment>
    );
}

export default ToDoFunction;

