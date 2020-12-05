import React from "react";
import { SelectInput } from "./styles";

export default function Select({ onChange, name, children ,...rest }) {
  return (    
    <SelectInput name={name} onChange={onChange} className="select" id="" {...rest} >{children}</SelectInput>
  );
}