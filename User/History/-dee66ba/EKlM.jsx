import React from "react";
import "./error.scss";
const Error = ({ childen }) => {
  return (
    <div className="input-xnodui-error-wrapper">
      <svg
        className="input-xnodui-error-icon"
        viewBox="0 0 534 534"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M267 0.333008C214.258 0.333008 162.701 15.9727 118.848 45.2744C74.9949 74.5761 40.8155 116.224 20.6322 164.951C0.448795 213.678 -4.83209 267.295 5.4573 319.024C15.7467 370.752 41.1442 418.267 78.4382 455.561C115.732 492.855 163.248 518.253 214.976 528.542C266.704 538.832 320.322 533.551 369.049 513.367C417.776 493.184 459.424 459.005 488.725 415.152C518.027 371.299 533.667 319.741 533.667 267C533.667 196.275 505.572 128.448 455.562 78.4379C405.552 28.4282 337.724 0.333008 267 0.333008ZM233.889 133.666C233.889 124.826 237.401 116.347 243.652 110.096C249.903 103.845 258.382 100.333 267.222 100.333C276.063 100.333 284.541 103.845 290.792 110.096C297.044 116.347 300.556 124.826 300.556 133.666V286.777C300.556 291.155 299.693 295.489 298.018 299.534C296.343 303.578 293.888 307.252 290.792 310.348C287.697 313.443 284.023 315.898 279.978 317.573C275.934 319.249 271.6 320.111 267.222 320.111C262.845 320.111 258.51 319.249 254.466 317.573C250.422 315.898 246.747 313.443 243.652 310.348C240.557 307.252 238.101 303.578 236.426 299.534C234.751 295.489 233.889 291.155 233.889 286.777V133.666ZM267 433.666C259.44 433.666 252.051 431.425 245.765 427.225C239.479 423.025 234.58 417.055 231.687 410.071C228.794 403.087 228.037 395.402 229.512 387.987C230.987 380.573 234.627 373.762 239.973 368.417C245.318 363.071 252.129 359.431 259.543 357.956C266.958 356.481 274.643 357.238 281.627 360.131C288.611 363.024 294.581 367.923 298.781 374.209C302.981 380.495 305.222 387.884 305.222 395.444C305.222 405.581 301.195 415.303 294.027 422.471C286.859 429.639 277.137 433.666 267 433.666Z"
          fill="#f31260"
        />
      </svg>

      <span className="input-xnodui-error">{childen}</span>
    </div>
  );
};

export default Error;
