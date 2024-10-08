"use client";
import { useState } from "react";

const StartActive = ({ size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 41 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1573 1.13231C19.5799 -0.168365 21.4201 -0.168367 21.8427 1.13231L25.5714 12.6081C25.7604 13.1898 26.3024 13.5836 26.914 13.5836H38.9804C40.348 13.5836 40.9166 15.3336 39.8102 16.1375L30.0483 23.2299C29.5535 23.5894 29.3465 24.2266 29.5355 24.8083L33.2642 36.2841C33.6868 37.5848 32.1981 38.6664 31.0917 37.8625L21.3298 30.7701C20.835 30.4106 20.165 30.4106 19.6702 30.7701L9.90831 37.8625C8.80189 38.6664 7.31321 37.5848 7.73582 36.2841L11.4645 24.8083C11.6535 24.2266 11.4465 23.5894 10.9517 23.2299L1.1898 16.1375C0.0833766 15.3336 0.651999 13.5836 2.01961 13.5836H14.086C14.6976 13.5836 15.2396 13.1898 15.4286 12.6081L19.1573 1.13231Z"
        fill="#FDBA74"
      />
    </svg>
  );
};

const StartInactive = ({ size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 41 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1573 1.13231C19.5799 -0.168365 21.4201 -0.168367 21.8427 1.13231L25.5714 12.6081C25.7604 13.1898 26.3024 13.5836 26.914 13.5836H38.9804C40.348 13.5836 40.9166 15.3336 39.8102 16.1375L30.0483 23.2299C29.5535 23.5894 29.3465 24.2266 29.5355 24.8083L33.2642 36.2841C33.6868 37.5848 32.1981 38.6664 31.0917 37.8625L21.3298 30.7701C20.835 30.4106 20.165 30.4106 19.6702 30.7701L9.90831 37.8625C8.80189 38.6664 7.31321 37.5848 7.73582 36.2841L11.4645 24.8083C11.6535 24.2266 11.4465 23.5894 10.9517 23.2299L1.1898 16.1375C0.0833766 15.3336 0.651999 13.5836 2.01961 13.5836H14.086C14.6976 13.5836 15.2396 13.1898 15.4286 12.6081L19.1573 1.13231Z"
        fill="#D4D4D8"
      />
    </svg>
  );
};

export default function RateStarsInput({
  value = 0,
  max = 5,
  disabled = false,
  onChange = null,
  size = 48,
}: any) {
  const [v, setV] = useState(value);

  const handleStarClick = (index: any) => {
    if (!disabled) {
      setV(index + 1);
      if (onChange) onChange(index + 1);
    }
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: max }, (_, index) => (
        <div
          key={index}
          onClick={() => handleStarClick(index)}
          className={` ${disabled ? "cursor-default" : "cursor-pointer"}`}
        >
          {index < v ? (
            <StartActive size={size} />
          ) : (
            <StartInactive size={size} />
          )}
        </div>
      ))}
    </div>
  );
}
