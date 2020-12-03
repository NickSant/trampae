import React from "react";

export default function Textarea({ onChange, name, value  }) {
  return (
    <textarea placeholder={name} onChange={onChange}>
        {value}
      </textarea>
  );
}
