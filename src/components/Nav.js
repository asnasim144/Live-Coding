import React from 'react'
// import Cookies from 'js-cookie';
// import axios from 'axios';

export default function Nav({ setCodeAndPreview, html, css, js, meta }) {
  return (
    <div className='header flex justify-between p-2 m-2'>
      <div>
        {/* <button onClick={createComponent} >Create Component</button> */}
      </div>
      <div>
        <button onClick={copyCode}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Copy Code</button>
        {/* <button onClick={save} >Save Code</button> */}
      </div>
    </div>
  )
  // create code and preview component
  function createComponent(){
    setCodeAndPreview(true)
  }

  // copy whole code as json
  function copyCode(){
    const code = `
    <!DOCTYPE html> 
    <html lang="en">
    <head>
      ${meta}
      <style>
        ${css}
      </style>
    </head>
    <body>
      ${html}
    </body>
    <script>
      ${js}
    </script>
    </html>
    `;
    const json = JSON.stringify(code)
    navigator.clipboard.writeText(json)
    .then(() => {
      alert('Code copied to clipboard!')
    })
    .catch((error) => {
      console.error('Error copying code:', error);
    })
  }

  // save code to the database (dummy link)
  // function save(){
  //   axios.post('http://localhost:9000/codes', {
  //     html: html,
  //     css: css,
  //     js: js,
  //   })
  //   .then(response => console.log(response.data))
  //   .catch(error => console.error(error));
  // }
}
