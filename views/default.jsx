const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="/css/style.css"/>
      </head>
      <body>
      <div key="nav">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/places">Places</a>
            </li>
            <li>
              <a href="/places/new">New Place</a>
            </li>
          </ul>
        </nav>
     </div>

        {html.children}
      </body>
    </html>
  );
}

module.exports = Def;
