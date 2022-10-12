

import React, { useState } from 'react';

export const ToDoPractice = () => {
    const [data, setData] = useState('');
    const [array, setArray] = useState([]);
   

    const handleClick = () => {
        if (data === undefined || data === "") {
            window.alert("Please enter value.");
            
            
        }   

        else {
            const ListArray = {
                value: data,
                id: Date.now()
            };

            array.push(ListArray);
            console.log(array);
            setArray(array);
            setData('');
            
        }
    }

    const handleEdit = (id) => {
        let b = window.confirm("Are you sure, you want to update the value?");
        console.log(b);
        if (b === true) {
            let a = window.prompt("Please enter new value");
            //   console.log(a);

            if (a === undefined || a === "" || a === null) {
                setArray(array);
            }

            else {
                const updated_array = array.map((item1) => {
                    if (item1.id === id) {
                        return {
                            ...array,
                            value: a, id: id

                        }
                    }
                    return item1;
                })
                setArray(updated_array);
                console.log(updated_array)
            }
        }
        else {
            setArray(array)
        }
    }

    const handleDelete = (id) => {
        let a = window.confirm("Are you sure, you want to delete this value?");
        // console.log(a)
        if (a === true) {
            var deletedArray = array.filter((value) => value.id !== id)
            console.log(deletedArray);
            setArray(deletedArray)
        }
        else {
            setArray(array)
        }

    }

    return (
        <React.Fragment>

            ToDoPractice <br /><br />
             
         
         
            <input type='text' name='data' onChange={(e) => setData(e.target.value)} value={data} />

            <button onClick={handleClick}>Add</button>  <br /><br />
         

          
    
          <div>
        <table border='1px'>
            <thead>
            <tr>
                <th>Data</th>
                <th>ID</th>
                <th colSpan='2'>Action</th>
            </tr>
            </thead>
            

          {array.map((item) =>{
                
                    return(
                        <tbody key={item.id}>
                        <tr >
                          <td>  {item.value}</td>
                          <td>  {item.id}</td>
                          <td> <input type='button' value='Edit' onClick={() => handleEdit(item.id)} /></td>
                          <td>  <input type='button' value='Delete' onClick={() => handleDelete(item.id)} /></td>
                             </tr>  
                             </tbody> 
                    )
                   
                    }
            )}
            
             </table>
             
            </div>

           

        </React.Fragment>
    )
}
