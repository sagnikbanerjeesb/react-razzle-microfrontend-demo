import {renderToString} from "react-dom/server";
import Header from "./Header";
import React from "react";

export default function headerRouteHandler(req, res) {
    const markup = renderToString(
        <Header/>
    );

    res.status(200).send(
        `<div id="header">${markup}</div>`
    );
}