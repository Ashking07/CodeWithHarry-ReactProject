//hooks gives you to use the features of "class" like "this.state", without having to make any class 

import React , {useState} from 'react'

export default function TextForm(props) {

    

    const [Text , setText] = useState('Enter Text Here');
    //Wrong Way to change the state is - Text = "Please provide Input"
    //Correct Way to change the state is - setText("Please provide Input")

    const handleUpperCaseClick = ()=>{
        console.log("UpperCase was Clicked")
        setText ("You have clicked the handelUpperCase !");
    }

    const handleOnChange = ()=>{
        console.log("On change")
    }
    

  return (
    <div>
      
<div className="mb-3">
  <label htmlFor="myBox" className="form-label">{props.heading}</label>
  <textarea className="form-control text-center" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  {/* button.btn.btn-primary     */}
    <button className="btn btn-primary my-3" onClick={handleUpperCaseClick}>Convert To UPPERCASE</button>
</div>
    </div>
  )
}
