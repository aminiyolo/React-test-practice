import React from "react";

const ErrorBanner = ({ msg = "에러 입니다." }) => {
  return (
    <div
      data-testid="error-banner"
      style={{ backgroundColor: "red", color: "white" }}
    >
      {msg}
    </div>
  );
};

export default ErrorBanner;
