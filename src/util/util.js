export function extractBasePath(req) {
    let basePath = req.headers["base-path"];
    return basePath ? basePath : "";
}