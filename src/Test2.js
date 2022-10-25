import React from "react";

class Test2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        var arr=[
            {firstname:"Akash",lastname:"Patel"},
            {firstname:"Pratik",lastname:'Padhiyar'},
            {firstname:"Vishal",lastname:'Prajapati'}

        ];
        return (
            
            <React.Fragment>
                {/* {arr.map(function(element,index,arr){
                    return (<div>{element.firstname+" "+element.lastname+" "+index+" "+JSON.stringify(arr)}</div>)
                })} */}

                {arr.map((element,index,arr)=>{
                    return(<div>{element.firstname+" "+element.lastname+" "+index+""+JSON.stringify(arr)}</div>)
                })}


            </React.Fragment>
            
        );
    }
}

export default Test2;