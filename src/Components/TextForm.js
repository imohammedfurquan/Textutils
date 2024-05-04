import React ,{useState} from 'react'

export default function TextForm(props){
    const handleUpCLick =()=>{
        let newText1 = text.toUpperCase();
        setText(newText1)
        props.showAlert("Converted to Uppercase","success")
    }
    const HandleToLow=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
     const duplicateText=()=>{
        let duplicateTxt = text.concat(" ",text)
        setText(duplicateTxt)
        props.showAlert("Text duplicated","success")
     }
    const handleOnChange = (event)=>{
        setText(event.target.value)
       
    }
    const toClear=()=>{
        let clear = "";
        setText(clear)
        {text.length<1?props.showAlert("Text is already empty","warning"):props.showAlert("Text has been cleared","success")}
    }
    const [text, setText] = useState('');
    return(
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='mb-2 my-3' >
                {props.heading}
            </h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#042748':'white',color: props.mode==='dark'?'white':'black'}}id='myBox' rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1 my-2' disabled={text.length<1} onClick={handleUpCLick}>UpperCase</button>
            <button className='btn btn-primary mx-1 my-2' disabled={text.length<1} onClick={HandleToLow}>Lowercase</button>
            <button className='btn btn-primary mx-1 my-2' disabled={text.length<1} onClick={duplicateText}>Duplicate</button>
            <button className='btn btn-primary mx-1 my-2' disabled={text.length<1} onClick={toClear}>Clear</button>

        </div>

        <div className="ym-2" style={{color: props.mode==='dark'?'white':'black'}}  >
            <h2 className='my-2'>Summary</h2>
            <p>Your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                 <h2>Text Preview</h2>
<p>{text.length>0?text:"Text written in the above box can be preview here"}</p>
        </div>
        
        </>
    )

}