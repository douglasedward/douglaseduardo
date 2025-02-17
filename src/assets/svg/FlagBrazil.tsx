import { SVGProps } from "react";

export function FlagBrazil(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="#009B3A"
        d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"
      ></path>
      <path fill="#FEDF01" d="M32.728 18L18 29.124L3.272 18L18 6.875z"></path>
      <circle cx="17.976" cy="17.924" r="6.458" fill="#002776"></circle>
      <path
        fill="#CBE9D4"
        d="M12.277 14.887a6.4 6.4 0 0 0-.672 2.023c3.995-.29 9.417 1.891 11.744 4.595c.402-.604.7-1.28.883-2.004c-2.872-2.808-7.917-4.63-11.955-4.614"
      ></path>
      <path fill="#88C9F9" d="M12 18.233h1v1h-1zm1 2h1v1h-1z"></path>
      <path
        fill="#55ACEE"
        d="M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z"
      ></path>
      <path fill="#3B88C3" d="M19 20.233h1v1h-1z"></path>
    </svg>
  );
}
