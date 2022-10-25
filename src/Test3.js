import React from "react";

class Test3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let my_array=[
            {product:"Laptop",category:"Electronics"},
            {product:"Shoes",category:"Lifestyle"},
            {product:"Chair",category:"Furniture"},
            {product:"Chair",category:"Furniture"}
        ];
        return (
            <React.Fragment>
                

                {/* <table border={1}>
                    <tr>
                        <th>Sr No.</th>
                        <th>Product</th>
                        <th>Category</th>
                    </tr>

                    {my_array.map(function(element,index){
                        return(
                            
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{element.product}</td>
                                    <td>{element.category}</td>
                                </tr>
                            
                        );
                    })}
                </table> */}

                <table border={1}>
                    <tr>
                        <th>Sr No.</th>
                        <th>Product</th>
                        <th>Category</th>
                    </tr>

                    {my_array.map((element,index)=>{
                        return(
                            
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{element.product}</td>
                                    <td>{element.category}</td>
                                </tr>
                           
                        );
                    })}
                </table>
               
                
            </React.Fragment>
        );
    }
}

export default Test3;