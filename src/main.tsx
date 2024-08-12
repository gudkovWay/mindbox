import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./core/App";
import "./core/styles/globals.css";
import { TodoProvider } from "./core/providers/tasks/Provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>,
);
