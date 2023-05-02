export default function (html, helmet, preloadedState = {}) {
    return `
    <!doctype html>
    <html lang='ru'>
        <head>
            <meta charset="utf-8">
            <meta http-equiv='x-ua-compatible' content='ie=edge'>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <title>Deltway</title>
            ${helmet.meta.toString()}
            <script src="https://widgets.bitcoin.com/widget.js" id="btcwdgt"></script>
            <link rel='stylesheet' type='text/css' href='/public/client.chunk.css'>
            <link rel='shortcut icon' href='/client/images/favicon.png' type='image/png'>
            <script src="https://kit.fontawesome.com/945aa2c24a.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" type="text/css" href="https://widgets.bitcoin.com/widget.css?46" media="all">
        </head>
        <body>
            <div id='app'>${html}</div>
            <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\\\\\\\\u003c')}
            </script>
            <script src="//www.instagram.com/embed.js" defer='defer'></script>
            <script src='/public/vendors-client.chunk.js' defer='defer'></script>
            <script src='/public/client.chunk.js' defer='defer'></script>
            <script>
            </script>
        </body>
    </html>`;
}
