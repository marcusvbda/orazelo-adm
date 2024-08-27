import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  className?: string;
  style?: any;
}

export default function Card({
  children,
  className = "",
  style = {},
}: IProps): ReactNode {
  return (
    <div
      className={`bg-white p-4 shadow-sm rounded-2xl max-h-screen overflow-y-auto flex-1 ${className}`}
      style={style}
    >
      {children ? children : <></>}
    </div>
  );
}
