import React from "react";

interface Props {
  type: string;
  name: string;
  title: string;
  placeholder: string;
  onChange: (e: any) => any;
  value: any;
};

export const InputGroup: React.FC<Props> = ({
  type,
  name,
  title,
  placeholder,
  onChange,
  value
}) => {
  return (
    <div className="">
      <label htmlFor={name}>
        <h3>{title}</h3>
      </label>
      <input
        className=""
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}