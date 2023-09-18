import React from "react";
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

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <IntlProvider messages={{}} locale="en" defaultLocale="en">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Routes>
            <Route path="/*" element={<ApplicationRoutes />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
