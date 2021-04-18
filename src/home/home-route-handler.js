import {renderToString} from "react-dom/server";
import Home from "./Home";
import {extractBasePath} from "../util/util";

export default function homeRouteHandler(req, res) {
    const basePath = extractBasePath(req);

    const markup = renderToString(
        <Home basePath={basePath}/>
    );

    res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!--# include virtual="${basePath}/meta/css" -->
    </head>
    <body>
       <div id="home">${markup}</div>
       <!--# include virtual="${basePath}/meta/js" -->
    </body>
    </html>`
    );
}