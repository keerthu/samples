import React from "react";

const Button = ({title = "Default title"}) => (
    <button className="button">{title}</button>
)


export default Button;