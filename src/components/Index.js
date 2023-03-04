import { useState } from "react";
import Editor from "./Editor";
import Nav from "./Nav";
import Preview from "./Preview" 


function Index() {
  const [codeAndPreview, setCodeAndPreview] = useState(false) 
  const [html, setHtml] = useState('') 
  const [css, setCss] = useState('') 
  const [js, setJs] = useState('') 

  // to pass setState to its child
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
      {/* { top header section as nav } */}
      <Nav setCodeAndPreview={handleCodeAndPreview} html={html} css={css} js={js} />
      {
        // { to render after clicking create component button}
        codeAndPreview &&

        //  code editors
        <div className="flex container"> 
          <div className="flexCol">
            <Editor language="HTML" codes={html} setCodes={handleHtml} />
            <Editor language="CSS" codes={css} setCodes={handleCss}  />
            <Editor language="JS" codes={js} setCodes={handleJs}  />    
          </div> 

          {/* preview section */}
          <Preview html={html} css={css} js={js} />
        </div>
      }
    </div>
  );
  
}

export default Index;