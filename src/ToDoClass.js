
import React from 'react'
// import { FocusEvent } from 'react';

class ToDoClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mydata:"",array:[]};
    }

   

    handleClick(){
        
        if(this.state.mydata===null || this.state.mydata===""){
            alert('Please enter value.');
            
            

        }

        else{
            // ListArray name no object bnavyo.
      let LisArray={
            value:this.state.mydata,
            id:Date.now()
        }
        console.log(LisArray);

        // let myDetails=[...this.state.array];  ahi spread operator no use na karie to pan chale.
       
        this.state.array.push(LisArray);
        this.setState({mydata:"",array:this.state.array});
        console.log(this.state.array);

    }}

    handleDelete(id){
        var index=this.state.array.filter((item)=>item.id!==id);
        this.setState({array:index});
        console.log(index);
    }   

    handleEdit(id){
        console.log(id);
        const text=prompt("Please enter new value below to update :");
        
        if(text===null || text===""){

        }
        else{
      const updated_data=this.state.array.map((element)=>{
        if(element.id===id){
            return{
                ...element,
                value:text,id:id
            }
        }
        return element;
        
    })
    this.setState({array:updated_data});
} 
    }



    render() {
        return (
            <React.Fragment>
                <form name='frm1'>
               Name : {this.props.name} Age : {this.props.value} <br/>
                <input type='text' name='n1' onChange={(e)=>{this.setState({mydata:e.target.value})}} placeholder='Enter data' autoFocus value={this.state.mydata} /> 
                <input type='button' value='Add' onClick={this.handleClick.bind(this)} />
                </form>
                <h4>{this.state.array.map((element)=>
                    <li key={element.id}>Value : {element.value} and ID : {element.id}
                    <input type='button' value='Edit' onClick={()=>this.handleEdit(element.id)} />
                    <input type='button' value='Delete' onClick={()=>this.handleDelete(element.id)} />
                    </li>
                )}</h4>

            </React.Fragment>
        );
    }
}

export default ToDoClass;