import React,{useState} from "react";
import "./App.css";
var pass1="";
const Content=()=>{
	const [str,setStr]=useState("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_+=?;:<>");
	
	const [l,setLength]=useState(8);
	const [check1,setCheck1]=useState(true);
	const [check2,setCheck2]=useState(true);
	const [check3,setCheck3]=useState(true);
	const [check4,setCheck4]=useState(true);
	const handleCheckbox1=()=>{setCheck1(!check1);      check1?(setStr(str.replace("abcdefghijklmnopqrstuvwxyz",""))):(setStr(str+"abcdefghijklmnopqrstuvwxyz"));}
	const handleCheckbox2=()=>{setCheck2(!check2);		check2?(setStr(str.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ",""))):(setStr(str+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"));}
	const handleCheckbox3=()=>{setCheck3(!check3);		check3?(setStr(str.replace("0123456789",""))):(setStr(str+"0123456789"));}
	const handleCheckbox4=()=>{setCheck4(!check4);		check4?(setStr(str.replace("!@#$%^&*-_+=?;:<>",""))):(setStr(str+"!@#$%^&*-_+=?;:<>"));}
	console.log(str);
	const handleSubmit=(e)=>{
		e.preventDefault();
		if(!check1 && !check2 && !check3 && !check4)
		{
			alert("You have check atleast one checkbox");
			return;
		}
		document.getElementById('writePass').innerHTML="";
		pass1="";
		for(let i=0;i<l;i++){
			var len=Math.floor(Math.random()*str.length);
			
			pass1+=str[len];
		}
		document.getElementById('writePass').innerHTML=pass1;
	}
	const decrement=()=>{
		setLength(l-1);
		if(l===1){
			document.getElementById('b1').disabled=true;
		}
		if(l<21)
			document.getElementById('b2').disabled=false;
		
	}
	const increment=()=>{
		setLength(l+1);
		if(l===19){
			document.getElementById('b2').disabled=true;
			
		}
		if(l>-1)
			document.getElementById('b1').disabled=false;
	}
	return <>
<form onSubmit={handleSubmit}>
            <p id="writePass"></p><br/>
			<input id='b1' type="button" onClick={decrement} value="-" /><span>{l}</span><input id='b2' type="button" onClick={increment} value="+"/><br/><br/>
			<div id="cb">
			<input id="cb1" type="checkbox" name="cb1" checked={check1}  onChange={handleCheckbox1}/><label>Lowercase Alphabets</label><br/><br/>
			<input id="cb2" type="checkbox" name="cb2" checked={check2}  onChange={handleCheckbox2}/><label>Uppercase Alphabets</label><br/><br/>
			<input id="cb3" type="checkbox" name="cb3" checked={check3}  onChange={handleCheckbox3}/><label>Numbers</label><br/><br/>
			<input id="cb4" type="checkbox" name="cb4" checked={check4}  onChange={handleCheckbox4}/><label>Special Character</label><br/><br/>
			</div>
			<input type="submit" value="GENERATE" />
		  </form>
		</>
}
const App=()=>{
	return <>
		  <h1>Random Password Generator</h1>	
		  <h2>Welcome!</h2>
		  <p>You can generate a random password</p>
		  <Content/>
		</>
}

export default App;