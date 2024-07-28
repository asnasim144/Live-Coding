import { useState } from "react";
// import Editor from "./Editor";
import Editor from "./NewEditor";
import Nav from "./Nav";
import Preview from "./Preview" 
import EditorNav from "./EditorNav";


function NewIndex() {
  const [codeAndPreview, setCodeAndPreview] = useState(true)
  const [openEditor, setOpenEditor] = useState("HTML");
  const [html, setHtml] = useState(`
    <p class="text-denger" >Try this!</p>
  `) 
  const [css, setCss] = useState(`
    .text-denger {
      color: red;
    }
  `) 
  const [js, setJs] = useState(``) 
  const [meta, setMeta] = useState(``) 

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
    <>
      {/* { top header section as nav } */}
      <Nav setCodeAndPreview={handleCodeAndPreview} html={html} css={css} js={js} meta={meta} />
      <EditorNav setOpenEditor={setOpenEditor} />
      {
        // { to render after clicking create component button}
        codeAndPreview &&
        //  code editors
        <div className="grid grid-cols-1 gap-4 mx-10 md:grid-cols-2"> 
          <div className="flex flex-col gap-3 ">
            {`
              <!DOCTYPE html>
            `}
            <br />
            {`
              <html lang="en">
            `}
            <br />
            {`
              <head>
            `}
            <br />
            <Editor language="Meta" codes={meta} setCodes={setMeta} expandedEditor={openEditor} />
            <br />
            &nbsp;&nbsp;{`
              <style>
            `}
            <br />
            <Editor language="CSS" codes={css} setCodes={handleCss}  expandedEditor={openEditor} />
            <br />
            &nbsp;&nbsp;{`
              </style>
            `}
            <br />
            {`
              </head>
            `}
            <br />
            {`
              <body>
            `}
            <br />
            <Editor language="HTML" codes={html} setCodes={handleHtml}  expandedEditor={openEditor} />
            <br />
            {`
              </body>
            `}
            <br />
            <Editor language="JS" codes={js} setCodes={handleJs} expandedEditor={openEditor} />
            <br />
            {`
              </html>
            `}
          </div> 

          {/* preview section */}
          <Preview html={html} css={css} js={js} meta={meta} />
        </div>
      }
    </>
  );
  
}

export default NewIndex;