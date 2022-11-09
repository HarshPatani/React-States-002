import "./App.css";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markDown, setMarkDown] = useState("# h1 
```
Code
```
");
  return (
    <>
      <h1 className="h1">MarkDown Editor</h1>
      <div className="main">
        <div className="left-side">
          <h3>Write your markdown here:</h3>

          <textarea
            onChange={(e) => setMarkDown(e.target.value)}
            name="markdown"
            id="markdown"
          ></textarea>
        </div>

        <div className="right-side">
          <h3>Generated HTML:</h3>
          <div>
            <ReactMarkdown>{markDown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
