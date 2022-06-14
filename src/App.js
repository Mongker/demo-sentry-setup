import React, {useState} from 'react';
import "./App.css";

// sentry
import * as Sentry from "@sentry/react";

export default function App() {
    const [message, setMessage] = useState("This is my app");
    return (
        <React.Fragment>
            <Sentry.ErrorBoundary
                fallback={({ error, componentStack, resetError }) => (
                    <div className="App">
                        <div>
                            <div>You have encountered an error</div>
                            <div style={{color: 'red'}}>{error.toString()}</div>
                            <div style={{color: '#d7b700'}}>{componentStack}</div>
                        </div>
                    </div>
                )}
            >
                <div className="App">
                    <h1>Hello CodeSandbox</h1>
                    <h2>Start editing to see some magic happen!</h2>
                    <div>{message}</div>
                    {/* on click, this button sets an Object as a message, not a string. */}
                    {/* which will cause an error to occur in the component tree */}
                    <button
                        onClick={() => setMessage({haizz: "Hello World"})} // Tạo Bug: Cập nhật string thành object để tạo lỗi
                    >
                        Click here to change message!
                    </button>
                </div>
            </Sentry.ErrorBoundary>
        </React.Fragment>
    );
}
