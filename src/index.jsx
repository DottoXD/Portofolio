import { Route, Router } from "@solidjs/router";
import { render } from "solid-js/web";

import "./index.css";
import Index from "./routes/Index";
import FooterComponent from "./components/footer";
import NewsComponent from "./components/news";

const root = document.getElementById("app");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <div>
      <NewsComponent />
      <Router>
        <Route path="/" component={Index} />
      </Router>
      <FooterComponent />
    </div>
  ),
  root,
);
