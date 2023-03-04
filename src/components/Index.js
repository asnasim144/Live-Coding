import { useState } from "react";
import Editor from "./Editor";
import Nav from "./Nav";
import Preview from "./Preview" 


function Index() {
  const [codeAndPreview, setCodeAndPreview] = useState(false) 
  const [html, setHtml] = useState('') 
  const [css, setCss] = useState('') 
  const [js, setJs] = useState('') 

  const handleHtml = (changedCode) => {
    setHtml(changedCode);
  };
  const handleCss = (changedCode) => {
    setCss(changedCode);
  };
  const handleJs = (changedCode) => {
    setJs(changedCode);
  };
  const handleCodeAndPreview = (view) => {
    setCodeAndPreview(view);
  };

  return ( 
    <div>
      <Nav setCodeAndPreview={handleCodeAndPreview} html={html} css={css} js={js} />
      {
        codeAndPreview &&
        <div className="flex container"> 
          <div className="flexCol">
            <Editor language="HTML" codes={html} setCodes={handleHtml} />
            <Editor language="CSS" codes={css} setCodes={handleCss}  />
            <Editor language="JS" codes={js} setCodes={handleJs}  />    
          </div> 
          <Preview html={html} css={css} js={js} />
        </div>
      }
    </div>
  );
  
}

export default Index;