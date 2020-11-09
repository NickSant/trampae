import React from "react"
import AsyncSelect from 'react-select/async'

export default function Select({ onChange, name, children, options ,...rest }) {
  return (    
    <AsyncSelect 
      placeholder={name} 
      onChange={onChange}  
      loadOptions={options}
      {...rest}
    />
  );
}
