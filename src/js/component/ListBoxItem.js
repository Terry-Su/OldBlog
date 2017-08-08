import React from 'react'


export default function ListBoxItem({ blog, onClick }) {
  return (
    <div onClick={onClick}>
      <h1>{blog.title}</h1>
      <br />
      <p style={{
        color: 'grey'
      }}>{blog.abstract}</p>
    </div>
  )
}