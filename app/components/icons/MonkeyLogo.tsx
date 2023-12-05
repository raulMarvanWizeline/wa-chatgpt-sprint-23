import type { FC } from "react";

const MonkeyLogo: FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return  (
    <svg 
      width="50" 
      height="50" 
      viewBox="0 0 50 50" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M25,1C11.8,1,1,11.8,1,25s10.8,24,24,24s24-10.8,24-24S38.2,1,25,1z M25,45
        c-11,0-20-9-20-20s9-20,20-20s20,9,20,20S36,45,25,45z"/>
      <circle cx="17" cy="22" r="3"/>
      <circle cx="33" cy="22" r="3"/>
      <path d="M25,28c-4.4,0-8,2.9-8,6.5S20.6,41,25,41s8-2.9,8-6.5S29.4,28,25,28z"/>
    </svg>
  );
};

export default MonkeyLogo;
