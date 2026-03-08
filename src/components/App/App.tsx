import { Routes, Route } from "react-router";
import Header from "./Header/Header";
import { dataNavBarItems } from "../../data/dataNavBarItems";
import Footer from "./Footer/Footer";
import { dataContact } from "../../data/dataContact";
import ScrollToTop from "../shared/ScrollToTop";
import { useEffect } from "react";
import { reportWebVitals } from "../../reportWebVitals";
import { routes } from "../../routes";

const styles = {
  container: "flex flex-col justify-between items-center min-h-screen",
};

export default function App() {
  useEffect(() => {
    reportWebVitals();
  }, []);

  return (
    <div className={styles.container}>
      <Header navBarItems={dataNavBarItems} />
      <ScrollToTop />
      <Routes>
        {routes.map((el) => (
          <Route key={el.id} path={el.path} element={<el.element />} />
        ))}
      </Routes>
      <Footer dataContact={dataContact} />
    </div>
  );
}
