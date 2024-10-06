import React from 'react'
// import Cookies from 'js-cookie';
// import axios from 'axios';

export default function Nav({ setCodeAndPreview, html, css, js, meta }) {
  return (
    <div className='flex justify-between p-2 m-2 header'>
      <div>
        {/* <button onClick={createComponent} >Create Component</button> */}
      </div>
      <div>
        <button onClick={copyCode}  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Copy Code</button>
        {/* <button onClick={save} >Save Code</button> */}
      </div>
    </div>
  )
  // create code and preview component 
  // function createComponent(){
  //   setCodeAndPreview(true)
  // }

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
    navigator.clipboard.writeText(code)
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
