"use client";

import { ReactNode, useMemo } from "react";

interface IProps {
  data: any;
  width?: number;
  height?: number;
  callbackRenderAxisY?: (value: string) => ReactNode;
}

export default function Barchart({
  data,
  width = 50,
  height = 50,
  callbackRenderAxisY,
}: IProps): ReactNode {
  const keys = useMemo(() => {
    return Object.keys(data);
  }, [data]);

  const values = useMemo(() => {
    return keys.map((x: any) => data[x]);
  }, [data, keys]);

  const heightList = useMemo(() => {
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const min = minValue > 0 ? 0 : minValue;
    const max = Math.ceil(maxValue);
    return Array.from({ length: max - min + 1 }, (_, i) => i + min)
      .sort((a, b) => b - a)
      .filter((x) => x);
  }, [values]);

  const calcPercentHeight = (value: number) => {
    const percent = (value / heightList[0]) * 100;
    const totalH = (heightList.length - 1) * height;
    return (totalH * percent) / 100;
  };

  const handleRenderAxisY = (v: string) => {
    return v.toUpperCase();
  };

  return (
    <div
      className="w-full flex flex-col  mb-14 pl-6"
      style={{ height: `${heightList.length * height}px` }}
    >
      {heightList.map((x: any, i: number) => (
        <div
          key={`${i}_x`}
          className="flex flex-row flex-1 border-b border-dashed border-gray-200 items-center"
        >
          <div
            key={`${i}_y`}
            style={{
              top: `${height / 2}px`,
              left: `-${height / 2}px`,
            }}
            className="flex-1 flex items-center relative text-sm text-neutral-400"
          >
            {callbackRenderAxisY ? callbackRenderAxisY(x) : x}
          </div>
          {keys.map((y: any, z: number) => (
            <div
              key={`${z}_x_y`}
              className="flex-1 flex items-center relative"
              style={{ height: `${height}px` }}
            >
              {heightList.length - 1 === i && (
                <>
                  <div
                    className="absolute items-center text-center justify-center flex text-neutral-400 text-sm"
                    style={{ top: `${height * 1.2}px`, width: `${width}px` }}
                  >
                    {handleRenderAxisY(y)}
                  </div>
                  <div
                    className={`bg-primary h-[10px] absolute rounded-tl-lg rounded-tr-lg`}
                    style={{
                      width: `${width}px`,
                      height: `${calcPercentHeight(values[z])}px`,
                      bottom: 0,
                    }}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
