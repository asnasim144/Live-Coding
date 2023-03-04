import React from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Nav({ setCodeAndPreview, html, css, js }) {
  return (
    <div className='header'>
      <div>
        <button onClick={createComponent} >Create Component</button>
      </div>
      <div>
        <button onClick={copyCode} >Copy Code</button>
        <button onClick={save} >Save Code</button>
      </div>
    </div>
  )
  function createComponent(){
    setCodeAndPreview(true)
  }
  function copyCode(){
    const code = {
      html: html,
      css: css,
      js: js,
    };
    const json = JSON.stringify(code);
    console.log("🚀 ~ file: Nav.js:27 ~ copyCode ~ json:", json)
    Cookies.set('code', json, { expires: 1 });
  }
  function save(){
    axios.post('http://localhost:9000/codes', {
      html: html,
      css: css,
      js: js,
    })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
  }
}
