import React,{useState} from 'react'

const InputFields = () => {
    const [insertText, setInsertText] = useState()
    console.log(`insertText`, insertText)
    return (
        <div className="bg-gray-700 p-10 w-96 h-96 m-20">
            <p className="text-white ">type name</p>
          <input value={insertText} className="w-36" placeholder="enter your name" onChange={(event)=> setInsertText(event.target.value)}/>
        </div>
    )
}

export default InputFields
