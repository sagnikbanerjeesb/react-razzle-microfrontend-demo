import React from 'react';
import express from 'express';
import {extractBasePath} from './util/util'
import homeRouteHandler from "./home/home-route-handler";
import headerRouteHandler from "./header/header-route-handler";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const cssLinksFromAssets = (basePath, assets, entrypoint) => {
    return assets[entrypoint] ? assets[entrypoint].css ?
        assets[entrypoint].css.map(asset =>
            `<link rel="stylesheet" href="${basePath + asset}">`
        ).join('') : '' : '';
};

const jsScriptTagsFromAssets = (basePath, assets, entrypoint, extra = '') => {
    return assets[entrypoint] ? assets[entrypoint].js ?
        assets[entrypoint].js.map(asset =>
            `<script src="${basePath + asset}"${extra}></script>`
        ).join('') : '' : '';
};

const server = express();
server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    .get('/meta/css', (req, res) => {
        const basePath = extractBasePath(req);

        res.status(200).send(
            `${cssLinksFromAssets(basePath, assets, 'client')}`
        );
    })
    .get('/meta/js', (req, res) => {
        const basePath = extractBasePath(req);

        res.status(200).send(
            `${jsScriptTagsFromAssets(basePath, assets, 'client', ' defer crossorigin')}`
        );
    })
    .get('/header', headerRouteHandler)
    .get('/home', homeRouteHandler)
    .get('/$', homeRouteHandler);

export default server;
