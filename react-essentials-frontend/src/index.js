import 'whatwg-fetch'
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);



// import reportWebVitals from './reportWebVitals';

// function AppTwo() {
//     return (
//         <h1>This is the second App</h1>
//     )
// }

// const checkList = ["boots", "tent", "headlamp"]
// const [item1, item2, item3] = ["boots", "tent", "headlamp"]
// const [,, item4] = ["boots", "tent", "headlamp"]
// console.log(item4)

// ReactDOM.render(
//     // <React.StrictMode>
//     //   <App />
//     // </React.StrictMode>,
//     //React.createElement("h1", { style: { color: "blue" } }, "Hello World!"),
//     // React.createElement(
//     //     "ul",
//     //     null,
//     //     React.createElement("li", null, "Monday"),
//     //     React.createElement("li", null, "Tuesday"),
//     //     React.createElement("li", null, "Wednesday"),
//     //     React.createElement("li", null, "Thursday")
//     // ),
//     // <React.Fragment>
//     // <>
//     // <App authorized={true}/>,
//     <App login="ginamorongwa"/>,
//     // <AppTwo/>
//     // </> 
//     // </React.Fragment>,
//     document.getElementById("root")
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();