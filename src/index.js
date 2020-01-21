import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from './configureStore';
import Dashboard from "./container/dashboard";

const App = () => {
    return (
        <Provider store={store}>
            <Dashboard />
        </Provider>
    )
}

ReactDOM.render(
    <App />, document.getElementById('app')
);
