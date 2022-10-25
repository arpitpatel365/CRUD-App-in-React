
import React from 'react';
class Map3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
   const users=[
        {firstname:"Arpit",lastname:"Patel"},
        {firstname:"Jenish",lastname:"Jain"},
        {firstname:"Harish",lastname:"Kamani"}
      ];



        return(
            <div>
                
                {users.map((element,index)=>{
                    return <div>
                        <h1>{"at index : "+index+" first name : "+element.firstname +" and last name :"+element.lastname }</h1>    
                    </div>
                })}

            </div>
        );
    }
}

export default Map3;