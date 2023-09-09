import { useState } from "react";


const TextArea = () => {
  const [text, setText] = useState("Enter Text Here");
  //console.log(text);
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
          <h2 className="header">SIMPLE TEXT UTILITY</h2>
          <form action="/action_page.php">
            <div className="mb-3 mt-3">
              <label htmlFor="comment"></label>
              <textarea style={mode} className="form-control" rows="7" id="comment" value={text} onChange={handleChange} name="text"></textarea>
              <div className="wordcount">
              <b><span id="wordCount">Word Count: </span></b>
              </div>
              <div className="tabs">
              <button type="button" className="btn" id="but" onClick={Uppercase}>toUppercase</button>
              <button type="button" className="btn" id="but" onClick={Lowercase}>toLowercase</button>
              <button type="button" className="btn" id="but" onClick={Count}>No Of Characters</button>
              <button type="button" className="btn" id="but" onClick={getCount}>No Of Words</button>
              <button type="button" className="btn" id="but" onClick={ClearAll}>Clear All</button>
              <button type="button" className="btn" id="but" onClick={toggleMode}>ChangeMode</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default TextArea;