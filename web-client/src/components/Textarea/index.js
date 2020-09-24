import React from "react";

export default function Textarea({ onChange, name  }) {
  return (
    <textarea placeholder={name} onChange={onChange}>
        
      </textarea>
  );
}
