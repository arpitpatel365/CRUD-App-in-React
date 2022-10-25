
// 1)
// var arr=[10,20,30,40,50,60];

// console.log(arr[0]);

// map e i paramter vada function ne call kare che.
// map e arr name ni array na darek elements ne function ma i paramterer tarie pass kare che.
// var ans=arr.map(function(i){
//     return i;
// });

// console.log(ans);

// 2) loop vs map
//2.1) iterate over an array using for loop
// let y=[1,2,3,4];
// let i;
// for (i=0;i<y.length;i++){
//     y[i]=y[i]*2;
//     console.log(y[i]);
// }

 
// 2.2) iterte over an array using map() method
// var y=[4,5,6,7];

// let ans=y.map(function(item){
//     return item*3;
// })

// console.log(ans);

// 3.1) Item Index Array

// var x=[10,20,30,40,50];

// x.map(function(item,index,arr){
    
    
//     console.log("item : "+item+" at index "+index+" in array "+arr);
    
// });

// 3.2) Item Index Array

// var y=[4,5,6,7];

// y.map(function(element,index,array){

//     console.log("element is "+element);
//     console.log("index is "+index);
//     console.log("array is "+array);
//     // return element
// })

// 3.3) Item Index Array

// let fruit=["apple","banana","potato","batato"];

// fruit.map(function(item,index,fruit){
//     console.log("item : "+item+" at index at "+index+ " from "+fruit);
// })

// 4.1) map() over an array of objects

// let user=[
//     {firstname:"Akash",lastname:"Patel"},
//     {firstname:"Rahul",lastname:"Shah"},
//     {firstname:"Smit",lastname:"Sharma"}
// ]

// user.map(function(element){
// 
//     console.log(`${element.firstname} ${element.lastname}`);
// })

// 4.2) map() over an array of objects

let user=[
    {firstname:"Arpit",lastname:"Patel"},
    {firstname:"Ashwin",lastname:"Kumar"},
    {firstname:"Smit",lastname:"Shah"}
];

// console.log(user[0]);

let x_user=user.map(function(element,index,array){
    //    console.log(index);
    //    console.log(element);
       console.log(array);
})





