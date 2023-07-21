//REMEMBER to do "cd -folder-Where-Your_react_project_is- -> *your React-Project-File* "
//Then do npm install -> npm start




//hooks gives you to use the features of "class" like "this.state", without having to make any class 

import {React ,useState} from 'react'

export default function TextForm(props) {

    

    const [Text , setText] = useState('');
    //Wrong Way to change the state is - Text = "Please provide Input"
    //Correct Way to change the state is - setText("Please provide Input")

    const handleUpperCaseClick = ()=>{
        console.log("UpperCase was Clicked -> " + Text)
        let newText = Text.toUpperCase();
        setText (newText);
    }

    const handleLowerCaseClick = ()=>{
      console.log("LowerCase was Clicked -> " + Text)
      let newText2 = Text.toLowerCase();
      setText (newText2);
  }

  const handleClearClick = ()=>{
    console.log("Clear was Clicked")
    let newText3 = "";
    setText (newText3);
}

const handleEmojiClick = ()=>{
  console.log("Emoji was Clicked")
  let newText3 = "🔥" + Text + "🌸";
  setText (newText3);
}

    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value)
    }
    

  return (
    <>
    <div className='container'>
        <div className="mb-3">

          <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
          
          <textarea className="form-control text-center" value={Text} onChange={handleOnChange} id="myBox" rows="8"/>

            <button className="cool-btn1 mx-2" onClick={handleUpperCaseClick}>Convert To UPPERCASE ⬆️</button>
            <button className="cool-btn2 mx-2" onClick={handleLowerCaseClick}>Convert To lowercase ⬇️</button>
            <button className="cool-btn1 mx-2" onClick={handleEmojiClick}>Add 🔥</button>
            <button className="cool-btn3 mx-2" onClick={handleClearClick}>Clear Text</button>


        </div>
    </div>

    <div className='container my-3'>
        <h2>Your Text Summary</h2>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008 * Text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{Text}</p>
    </div>
    </>
  )
}
