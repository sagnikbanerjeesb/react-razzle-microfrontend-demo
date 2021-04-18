import React from "react";
import './home.scss';

export default function Home({basePath}) {
    // Here Home component does an SSI on header served by the same app, hence knowing self basePath is enough
    // However, if Home component were to SSI a component served by some other app (say, Account app), then
    // just like basePath (which the base path of this app), we can also take Account app's base path as an input
    // (accountBasePath maybe?) and construct proper SSI url. accountBasePath should be provided by the
    // application / reverse proxy sitting in front of this app (nginx in this case).

    // In this way this app is decoupled from external routing logic. Hence any changes to base route will not impact
    // this application's code.

    return <div className="home-page">
        <div dangerouslySetInnerHTML={{__html: `<!--# include virtual="${basePath}/header" -->`}} />
        <div className="home">Home Page</div>
    </div>
}