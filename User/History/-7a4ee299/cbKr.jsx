import React from "react";
import "./add_btn.scss";
const AddBtn = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.38223 12.5C6.38223 12.2969 6.4636 12.1022 6.60845 11.9586C6.7533 11.815 6.94976 11.7344 7.15461 11.7344H11.7889V7.14062C11.7889 6.93757 11.8703 6.74283 12.0152 6.59925C12.16 6.45566 12.3565 6.375 12.5613 6.375C12.7662 6.375 12.9626 6.45566 13.1075 6.59925C13.2523 6.74283 13.3337 6.93757 13.3337 7.14062V11.7344H17.968C18.1729 11.7344 18.3693 11.815 18.5142 11.9586C18.659 12.1022 18.7404 12.2969 18.7404 12.5C18.7404 12.7031 18.659 12.8978 18.5142 13.0414C18.3693 13.185 18.1729 13.2656 17.968 13.2656H13.3337V17.8594C13.3337 18.0624 13.2523 18.2572 13.1075 18.4008C12.9626 18.5443 12.7662 18.625 12.5613 18.625C12.3565 18.625 12.16 18.5443 12.0152 18.4008C11.8703 18.2572 11.7889 18.0624 11.7889 17.8594V13.2656H7.15461C6.94976 13.2656 6.7533 13.185 6.60845 13.0414C6.4636 12.8978 6.38223 12.7031 6.38223 12.5ZM12.5613 24.75C15.8389 24.75 18.9823 23.4594 21.2999 21.1621C23.6175 18.8647 24.9195 15.7489 24.9195 12.5C24.9195 9.2511 23.6175 6.13526 21.2999 3.83794C18.9823 1.54062 15.8389 0.25 12.5613 0.25C9.28373 0.25 6.14037 1.54062 3.82276 3.83794C1.50515 6.13526 0.203125 9.2511 0.203125 12.5C0.203125 15.7489 1.50515 18.8647 3.82276 21.1621C6.14037 23.4594 9.28373 24.75 12.5613 24.75ZM12.5613 23.2188C11.1413 23.2188 9.73515 22.9415 8.42321 22.4028C7.11126 21.8642 5.9192 21.0746 4.91508 20.0793C3.91096 19.084 3.11445 17.9023 2.57102 16.6019C2.0276 15.3014 1.7479 13.9076 1.7479 12.5C1.7479 11.0924 2.0276 9.69857 2.57102 8.39811C3.11445 7.09765 3.91096 5.91603 4.91508 4.9207C5.9192 3.92537 7.11126 3.13583 8.42321 2.59717C9.73515 2.0585 11.1413 1.78125 12.5613 1.78125C15.4292 1.78125 18.1797 2.91054 20.2076 4.9207C22.2355 6.93085 23.3748 9.65721 23.3748 12.5C23.3748 15.3428 22.2355 18.0691 20.2076 20.0793C18.1797 22.0895 15.4292 23.2187 12.5613 23.2188Z"
          fill="url(#paint0_linear_6282_27967)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_6282_27967"
            x1="0.203125"
            y1="12.4183"
            x2="24.9195"
            y2="12.5004"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF6689" />
            <stop offset="1" stop-color="#E066FF" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default AddBtn;
