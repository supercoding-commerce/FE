import { SVGProps } from 'react';

export function DeleteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="9" fill="black" fillOpacity="1" />
      <circle cx="12" cy="12" r="9" fill="black" fillOpacity="1" />
      <path d="M9 9L15 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15 9L9 15" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
