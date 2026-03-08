import type { DATA_PRESENTATION } from "@/model/types/DataPresentationType";
import ButtonDefault from "../shared/ButtonDefault";
import { useNavigate, type NavigateFunction } from "react-router";
import type { ButtonDefaultProps } from "@/model/props/ButtonDefaultProps";

const styles = {
  container: "flex flex-col justify-around w-[80%] h-full",
  title: "text-left w-7/8 text-white-dark/90",
  subtitle: "w-7/8 text-white-dark text-shadow-2xs text-shadow-black",
};

const buttonProps = (navigate: NavigateFunction): ButtonDefaultProps => ({
  buttonName: "Saiba mais",
  width: "1/2",
  height: "12",
  fontSize: "lg",
  backgroundColor: "orange-primary",
  color: "black",
  clickEvent: () => navigate("/carros"),
});

type PresentationContentProps = {
  data: DATA_PRESENTATION;
};

export default function PresentationContent({
  data,
}: PresentationContentProps) {
  const { MAIN_TEXT, SUBTITTLE } = data;
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{MAIN_TEXT}</h1>
      <h3 className={styles.subtitle}>{SUBTITTLE}</h3>
      <ButtonDefault {...buttonProps(navigate)} />
    </div>
  );
}
