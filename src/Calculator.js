
import Button from '@mui/material/Button';
import { useState } from 'react';






export default function Calculator(){

  let [stillNumber1,setStillNumber1]=useState(false)
 let [result,setResult]=useState(0)



 let [pointClick,setPointClick]=useState(true)
 



let canClickOperation=true
 
    
    function handleChanges(num,type2){
      
      if(type2=='firstInput'){
        console.log("inside firstInput")
      if(!stillNumber1 && typeof(num)=='number'){

setResult(num)
setStillNumber1(true)
}
else if(num=='.'){
  if(pointClick==true){
  
   let value=String(result)
    let value3=String(value+num)
    setResult(value3)
    setPointClick(false)
  }
}

else{

  
  let value=String(result)
  let value2=String(num)
 let value3
  if(value=='0'){
      value3=String(value2)
  }
  else{
   value3=String(value+value2)
}
   let arr
   let newValue3
  /* let exist=value3[1]
  if(value3[0]=='0' && exist){
     arr = value3.split(','); // now it's an array
arr.splice(0, 1); // works now
 value3 = arr.join(','); // convert back to string if state needs to stay a string
  }*/
  console.log(value3)
  if(Number(value3)==0){
    setResult(0)
  }
  else{
  setResult(value3)
  }

}


}

else if(type2=="operator"){
  console.log("am inside opearor this is result",result)
let value2=String(result)
let includeSum=value2.includes('+')
let includeSub=value2.includes('-')
let includeMul=value2.includes('*')
let includeDiv=value2.includes('/')
console.log(includeSum,includeSub,includeMul,includeDiv)
if(includeSum || includeSub || includeMul || includeDiv){
  canClickOperation=false
}
else{
 canClickOperation=true
}


  if(canClickOperation){
  console.log("clicked f operator")
  setPointClick(true)

  let operand1Show=result
  let operator=num
  let show=`${String(operand1Show)}${operator}`
  console.log("inside type operator",show)
  setResult(show)
  
  }
}


 if(num=='DE'){
    let value=String(result)
    if(value=="" || value==null){
      setResult(0)
    }
    else{
    let arr=value.split("")
    arr.pop()
    let newValue=arr.join("")
    setResult(newValue)
    }
}
    }




    return(
<div style={{display:"flex",flexDirection:"column",gap:"10px",backgroundColor:"rgb(182, 184, 199)",padding:"20px",borderRadius:"12px"}}>
<div style={{backgroundColor:"black",borderRadius:"12px",textAlign:"right",paddingRight:"20px"}}>
    <h2 style={{height:"20px",alignContent:"center"}}>{result}</h2>
</div>


<div style={{display:'flex',flexDirection:"column",gap:"15px"}}>
 
 <div id='first' style={{display:'flex',gap:"15px"}}>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
  
  setResult(0)
 
}}>AC</Button>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
  handleChanges("DE")
}}>DE</Button>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
  handleChanges(".","firstInput")
}}>.</Button>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
 
  
  handleChanges("/","operator")
}}>/</Button>

 </div>

  <div id='second' style={{display:'flex',gap:"15px"}}>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
 
  handleChanges(7,"firstInput")

  
}}>7</Button>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
 
  handleChanges(8,"firstInput")
 
}}>8</Button>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
  handleChanges(9,"firstInput")
 
}}>9</Button>
<Button style={{flexGrow:"1"}} variant="contained"  onClick={()=>{
  


  handleChanges("*","operator")
}}>*</Button>

 </div>

  <div id='third' style={{display:'flex',gap:"15px"}}>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
 
  handleChanges(4,"firstInput")
  
}}>4</Button>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
  
  handleChanges(5,"firstInput")
 
}}>5</Button>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
  
  handleChanges(6,"firstInput")
 
}}>6</Button>
<Button style={{flexGrow:"1"}} variant="contained"  onClick={()=>{
  
  

  handleChanges("+","operator")
}}>+</Button>

 </div>

  <div id='fourth' style={{display:'flex',gap:"15px"}}>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
  
  handleChanges(1,"firstInput")
 
}}>1</Button>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{
 
  handleChanges(2,"firstInput")
  
}}>2</Button>
<Button style={{flexGrow:"1"}} variant="contained" onClick={()=>{

  handleChanges(3,"firstInput")
 
}}>3</Button>
<Button style={{flexGrow:"1"}} variant="contained"  onClick={()=>{
 

  handleChanges("-","operator")
}}>-</Button>

 </div>

  <div id='fifth' style={{display:'flex',gap:"15px"}}>
<Button style={{flexGrow:"1"}} variant="contained" sx={{flexGrow:"1"}} onClick={()=>{
 
  handleChanges(0,"firstInput")
  
}}>0</Button>
<Button style={{flexGrow:"1"}} variant="contained" sx={{flexGrow:"1"}} onClick={()=>{
let realResult=String(result)

console.log(realResult)

let includeSum=realResult.includes('+')
let includeSub=realResult.includes('-')
let includeMul=realResult.includes('*')
let includeDiv=realResult.includes('/')
console.log(includeSum,includeSub,includeMul,includeDiv)
if(!includeSum && !includeSub && !includeMul && !includeDiv){
  setResult(realResult)
}
else{
let i=0
while(realResult[i]!='+' && realResult[i]!='-' && realResult[i]!='*' && realResult[i]!='/'  ){
  i++
}
let operationn=realResult[i]
let number1=realResult[0]
for(let j=1;j<i;j++){
  number1=number1+realResult[j]
}
let number2=realResult[i+1]
for(let j=i+2;j<realResult.length;j++){
number2=number2+realResult[j]
}
number1=Number(number1)
number2=Number(number2)

console.log(number1)
console.log(number2)
console.log(operationn)

let newResult
if(operationn=="+"){
  newResult=number1+number2
 }
 else if(operationn=="-"){
  newResult=number1-number2
 }
 else if(operationn=="*"){
  newResult=number1*number2
 }
 else if(operationn=="/"){
  newResult=number1/number2
 }
 setResult(newResult)


}}
}>=</Button>


 </div>
      </div>

</div>
        
    )
}