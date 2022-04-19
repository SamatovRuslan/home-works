import "./Form.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";


function Form(props) {
	const[title, setTitle] = useState();

	function titleChangeHandler(event) {
		setTitle(event.target.value);
	}

	function sumbitHandler(event) {
		event.preventDefault();
		const mainTitle = {
			text: title
		};
		props.onSave(mainTitle);
	}

	return  <form onSubmit={sumbitHandler}>
		<input className='input' type='text' onChange={titleChangeHandler}></input>
		<button className='btn'>click</button>
	</form>;
        
}

export default Form;