import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import { MainLayout } from "../features/Layout/MainLayout";
import { About } from "../features/Pages/About/About";
import { Contact } from "../features/Pages/Contact/Contact";
import { Info } from "../features/Pages/Info/Info";
import { Partners } from "../features/Pages/Partners/Partners";
import { Projects } from "../features/Pages/Projects/Projects";
import { Social } from "../features/Pages/Social/Social";

export const ApplicationRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/info" element={<Info />} />
        <Route path="/social" element={<Social />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
};
