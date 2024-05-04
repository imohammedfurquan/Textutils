import React from 'react'
export default function About(props) {
  return (
    
    <div className={`my-5 mx-4 text-${props.mode === "dark" ? "light" : "dark"}`}>
      <h2 text-dark>This is about section</h2>
      <p>This is the official page for TextUtils , we offer following features </p>
      <ul>
        <li>You can Lowercase all the words</li>
        <li>You can Uppercase all the words</li>
        <li>You can Duplicate all the words</li>
        <li>You can Clear all the words</li>
        <li>You can count the characters in the documents</li>
        <li>You can count the words in the documents</li>
        <li>You can preview the document</li>
      </ul>
    </div>
    
  )
}
