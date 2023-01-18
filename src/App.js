import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import Resualts from "./components/Resualts";

function App() {
  const [text, setText] = useState('');
  const [update, setUpdate] = useState(text);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    let newText = text.replace(/\s/g, '+');
    fetch("https://api.datamuse.com/words?ml=" + newText)
      .then((res) => res.json())
      .then((json) =>  setUpdate(json[0]["word"]));
  };

  return (
    <div className="App">
      <SearchBar
        handleChange={handleChange}
        handleClick={handleClick}
        message={text}
      />
      <Resualts
        text={update}
      />
    </div>
  );
}

export default App;
