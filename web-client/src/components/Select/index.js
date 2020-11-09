import React from "react"

export default function Select({ onChange, name, children ,...rest }) {
  return (    
    <select name={name} onChange={onChange} className="select" id="" {...rest} >{children}</select>
  );
}