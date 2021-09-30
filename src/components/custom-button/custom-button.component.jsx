import "./custom-button.styles.scss";
import React from "react";

export default function CustomButton({ children, isGoogle, ...otherProps }) {
  return (
    <button
      className={`${isGoogle ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
