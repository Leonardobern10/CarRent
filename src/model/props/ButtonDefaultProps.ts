export type ButtonDefaultProps = {
  buttonName: string;
  width?: string | "fit";
  height?: string | "fit";
  fontSize?: string | "sm";
  backgroundColor?: string | "orange-primary";
  color?: string | "black-medium";
  weight?: string | "normal";
  clickEvent: () => void;
};
