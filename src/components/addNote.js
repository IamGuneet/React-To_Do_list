/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
// import Info from "./info"

function AddNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function trackChange(event) {
        const {name,value} = event.target;
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]:value
            }
        })
    };
    function addNote(event){
        props.onAdd({note})
        event.preventDefault()
        // if()
    }

    return (
        <>
            <form id='addInput' >
                <input id='title' name='title' type="text" onChange={trackChange}  placeholder='Title'
                    value={note.title}
                ></input>
                <input id='content' name='content'
                value={note.content}
                 type="text" onChange={ trackChange}  placeholder='Add Note...'></input>
                <button id='add' onClick={addNote}>+</button>
            </form>
        </>
    )
}

export default AddNote
