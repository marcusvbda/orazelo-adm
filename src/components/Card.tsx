import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: IProps): ReactNode {
  return (
    <div className={`bg-white p-4 shadow-sm rounded-lg flex-1 ${className}`}>
      {children ? children : <></>}
    </div>
  );
}
