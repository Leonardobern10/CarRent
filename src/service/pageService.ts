import { useNavigate } from "react-router";

export const roadToPage = (path: string): void => {
  const navigate = useNavigate();
  navigate(path);
};
