import React from "react";

interface Props {
  type: string;
  name: string;
  title: string;
  placeholder: string;
  maxLength: number;
  onChange: (e: any) => any;
  value: string;
};

export const InputGroup: React.FC<Props> = ({
  type,
  name,
  title,
  placeholder,
  maxLength,
  onChange,
  value
}) => {
  return (
    <div className="form-content">
      <label htmlFor={name}>
        <h3>{title}</h3>
      </label>
      <div className="form-content__field-container">
        <div className="form-content__field">
          <input
            className="form-content__input"
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
            name={name}
            onChange={onChange}
            value={value}
          />
        </div>
        <hr className="form-content__underline"/>
      </div>
    </div>
  )
}