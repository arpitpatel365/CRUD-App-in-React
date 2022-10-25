import React from "react";


class AddEditDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mydata:"",myarray:[]};
    }

    handleChange(input){
        this.setState({mydata:input.target.value})
       console.log(input);
    
    }

    handleAdd(input){
       
       console.log(this.state.mydata);
        
       // Listarray name no object banavyo che.
        let Listarray={
            value:this.state.mydata,
            id:Date.now()
            
        };
        console.log(Listarray);

        let mydetails=[...this.state.myarray];
        
        mydetails.push(Listarray);
        this.setState({mydata:"",myarray:mydetails})

        console.log(mydetails);
    }

    handleDelete(input){
        var index=this.state.myarray.filter((e)=>e.id!==input);
        
        console.log(index);
        this.setState({myarray:index})
    }

    handleEdit=(id)=>{
        console.log(id)
      const text=prompt('Task Name');
      const myData2=this.state.myarray.map(item=>{
        if(item.id===id){
            return{
                ...item,
                value:text,id:id
            }
        }
        return item;
      })

      this.setState({myarray:myData2})
}
    render() {
        return (
            <React.Fragment>
               
                <input type="text" name="mydata" onChange={this.handleChange.bind(this)} placeholder="Enter Data" /> 
                <input type="button" value="Add" onClick={()=>this.handleAdd()} />
            
                <h4>{this.state.myarray.map((item)=> 
                    <li key={item.id}>{item.id} and {item.value} 
                    <input type="button" value="Delete" onClick={()=>this.handleDelete(item.id)} /> 
                    <input type='button' value='Edit' onClick={()=>this.handleEdit(item.id)} /> </li>
                )}</h4>
            </React.Fragment>
        );
    }
}

export default AddEditDelete;