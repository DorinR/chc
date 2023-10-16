import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../features/Layout/MainLayout";
import { About1 } from "../features/Pages/1 About Us/About1";
import { About2 } from "../features/Pages/1 About Us/About2";
import { About3 } from "../features/Pages/1 About Us/About3";
import { About4 } from "../features/Pages/1 About Us/About4";
import { Project1 } from "../features/Pages/2 Projects/Project1";
import { Project2 } from "../features/Pages/2 Projects/Project2";
import { Project3 } from "../features/Pages/2 Projects/Project3";
import { Projects } from "../features/Pages/2 Projects/Projects";
import { Info } from "../features/Pages/3 Info/Info";
import { Info1 } from "../features/Pages/3 Info/Info1";
import { Info2 } from "../features/Pages/3 Info/Info2";
import { Info3 } from "../features/Pages/3 Info/Info3";
import { Social1 } from "../features/Pages/4 Business Sports/Social1";
import { Social2 } from "../features/Pages/4 Business Sports/Social2";
import { Partners } from "../features/Pages/5 Partners/Partners";
import { Partners1 } from "../features/Pages/5 Partners/Partners1";
import { Partners2 } from "../features/Pages/5 Partners/Partners2";
import { Partners3 } from "../features/Pages/5 Partners/Partners3";
import { Partners4 } from "../features/Pages/5 Partners/Partners4";
import { Contact } from "../features/Pages/6 Contact/Contact";
import { Contact1 } from "../features/Pages/6 Contact/Contact1";

export const ApplicationRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<About1 />} />
        <Route path="a1" element={<About1 />} />
        <Route path="a2" element={<About2 />} />
        <Route path="a3" element={<About3 />} />
        <Route path="a4" element={<About4 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/b1" element={<Project1 />} />
        <Route path="/b2" element={<Project2 />} />
        <Route path="/b3" element={<Project3 />} />
        <Route path="/info" element={<Info />} />
        <Route path="/c1" element={<Info1 />} />
        <Route path="/c2" element={<Info2 />} />
        <Route path="/c3" element={<Info3 />} />
        <Route path="/d1" element={<Social1 />} />
        <Route path="/d2" element={<Social2 />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/e1" element={<Partners1 />} />
        <Route path="/e2" element={<Partners2 />} />
        <Route path="/e3" element={<Partners3 />} />
        <Route path="/e4" element={<Partners4 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/f1" element={<Contact1 />} />
      </Routes>
    </MainLayout>
  );
};
