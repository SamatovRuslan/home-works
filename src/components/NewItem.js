// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import Form from "./Form";
import Card from "./Ui/Card";


function NewItem() {
	const [words, setWords] = useState([]);
    
	function saveData(data) {
		var dataWithId={
			...data,
			id: Math.random().toString()
		};
		setWords(words.concat(dataWithId));
	}
   
	return <Card>
		<Form onSave={saveData}/>
		
		<div className="new-items">
			{words.map((item)=>{
				var currentTime = new Date();
				let month = currentTime.toLocaleString("en-Us", {month: "long"});
				let day = currentTime.toLocaleString("en-Us", {day: "2-digit"});
				let year = currentTime.getFullYear();
				let full = month + " " + day + " " + year;
				return  <h1 key={item.id}>{full + ": " + item.text}</h1>;
			})}
		</div>
	</Card>;
}
export default NewItem;