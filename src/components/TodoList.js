import React from 'react'

export default function TodoList(props) {
  function handleClick(){
    props.clicked(props.id)
  }
  return (
    <div id='card'>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button id='delete' onClick={handleClick}>DONE</button>
    </div>
  )
}
