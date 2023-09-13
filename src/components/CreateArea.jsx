import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const[isExpanded, setExpand] = useState(false)

  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleExpand(){
    setExpand(true)
  }

  function handleInput(event){
    const {name, value} = event.target;

    setInput(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function submitInput(event){
    props.onAdd(input);
    setInput({
      title: "",
      content: ""
    })

    event.preventDefault();
  }

  

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" placeholder="Title" onChange={handleInput} value={input.title}/>}
        <textarea 
        name="content" 
        placeholder="Take a note..." 
        rows={isExpanded? 3:1}
        onChange={handleInput} 
        value={input.content}
        onClick={handleExpand}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={submitInput}> 
        <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
