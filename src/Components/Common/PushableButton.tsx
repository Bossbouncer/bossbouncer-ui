import React, { FunctionComponent, PropsWithChildren } from "react";
import "./common.css";

interface ButtonProps extends PropsWithChildren {
  color?: string;
  gradientColor: string;
  onClick:()=>void
}

const PushableButton: FunctionComponent<ButtonProps> = (props) => {
  const { children, color, gradientColor,onClick } = props;

  const createGradient = (baseColor: string): string => {
    // Extract the hue, saturation, and lightness from the baseColor
    const [hue, saturation, lightness] = baseColor.match(/\d+/g)!.map(Number);

    return `linear-gradient(
      to left,
      hsl(${hue}deg ${saturation}% ${lightness * 0.5}%) 0%,
      hsl(${hue}deg ${saturation}% ${lightness}%) 8%,
      hsl(${hue}deg ${saturation}% ${lightness}%) 92%,
      hsl(${hue}deg ${saturation}% ${lightness * 0.5}%) 100%
    )`;
  };
  const gradientBackground = createGradient(gradientColor);

  return (
    <>
      <button className="pushable" onClick={onClick}>
        <span className="shadow" style={{ backgroundColor: color }}></span>
        <span
          className="edge"
          style={{ background: gradientBackground }}
        ></span>
        <span className="front" style={{ backgroundColor: color }}>
          {children}
        </span>
      </button>
    </>
  );
};

export default PushableButton;
