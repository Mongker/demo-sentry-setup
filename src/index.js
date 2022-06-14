import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// Sentry
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// Khởi tạo các option cho dự án REACT
Sentry.init({
    dsn: "https://a3c8ad37e7954ee882fbb0ddb0edfdb3@sentry.demozone.vn/6",
    // dsn: "https://1f0d4d116d6444848c4115a9ee819cc1@o1282385.ingest.sentry.io/6489837",
    integrations: [new BrowserTracing()],
    release: "demo-sentry-react@0.0.1",
    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
