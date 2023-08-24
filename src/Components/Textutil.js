import { useState } from "react";


const TextArea = () => {
  const [text, setText] = useState("Enter Text Here");
  console.log(text);
  //------------------------------------------------------------------------------------------------------------------
  //We have created a text variable and "enter text here" is the initial value of this text variable.
  //setText is a function used to update the value of text.
  //-------------------------------------------------------------------------------------------------------------------

  const handleChange = (event) => {
    console.log(event);
    setText(event.target.value);
  }
  const Uppercase = () => {
    let name = text.toUpperCase();
    setText(name);
  }
  const ClearAll = () => {
    setText("");
  }
  const Count = () => {
    let number = text.length;
    setText(number);
  }
  const Lowercase = () => {
    let name = text.toLowerCase();
    setText(name);
  }
  const getCount = () => {
    const inputText = document.getElementById('comment').value;
    const words = inputText.split(/\s+/); // Splitting by spaces

    const filteredWords = words.filter(word => word !== ""); // Filtering out empty strings

    const wordCount = filteredWords.length;
    document.getElementById('wordCount').innerHTML = `Word Count: ${wordCount}`;// Update the word count display

    return wordCount;
  }

  const lightMode =
  {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '30px'
  }

  const darkMode =
  {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '30px'
  }
  const [mode, setMode] = useState(lightMode);

  const toggleMode = () => {
    if (mode.backgroundColor === 'white') {
      setMode(darkMode);
      console.log("Switched to darkMode");
    }
    else
     {
      setMode(lightMode);
      console.log("Switched to lightMode");
    }
    }
  return (
    <div className="App">
      <div className="App-body">
        <div className="container mt-3">
          <h2>TEXT UTILITY USING REACT</h2>
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label htmlFor="comment"></label>
              <textarea style={mode} className="form-control" rows="7" id="comment" value={text} onChange={handleChange} name="text"></textarea>
              <b><span id="wordCount">Word Count: </span></b>
              <br /><br/>
              <button type="button" className="btn btn-primary" onClick={Uppercase}>toUppercase</button>&nbsp;&nbsp;
              <button type="button" className="btn btn-primary" onClick={Lowercase}>toLowercase</button>&nbsp;&nbsp;
              <button type="button" className="btn btn-primary" onClick={Count}>No Of Characters</button>&nbsp;&nbsp;
              <button type="button" className="btn btn-primary" onClick={getCount}>No Of Words</button>&nbsp;&nbsp;
              <button type="button" className="btn btn-primary" onClick={ClearAll}>Clear All</button>&nbsp;&nbsp;
              <button type="button" className="btn btn-primary" onClick={toggleMode}>ChangeMode</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default TextArea;