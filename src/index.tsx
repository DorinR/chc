import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./css/GlobalStyle";
import { ErrorPage } from "./features/ErrorPage/ErrorPage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { ApplicationRoutes } from "./routes/coreRoutes";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from "react-intl";
import { getMessages } from "./Intl/messages";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

export const LangContext = React.createContext<{
  lang: "en" | "ro" | "ru";
  changeLang: (lang: "en" | "ro" | "ru") => void;
}>({
  lang: "en",
  changeLang: () => {},
});

const LocProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<"en" | "ro" | "ru">("en");

  const changeLang = (lang: "en" | "ro" | "ru") => {
    setLang(lang);
  };

  const messages = getMessages(lang);

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      <IntlProvider
        messages={messages}
        locale="en"
        onError={(err) => {
          // If it is not a missing translation then we display the entire error to the user.
          if (err.code !== "MISSING_TRANSLATION") {
            // eslint-disable-next-line no-console
            console.error(err);
          }
        }}
      >
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

root.render(
  <React.StrictMode>
    <LocProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Routes>
            <Route path="/*" element={<ApplicationRoutes />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </LocProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
