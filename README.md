# application-nodeJs

Creating One Application with Node Js and Express. Add a Router and Bootstrap 5 for Backend and Front-end.  

# Reference Project: Fazt

> Fazt & Fazt Code

[Fazt](https://www.youtube.com/@FaztTech);

[Fazt_Code](https://www.youtube.com/@FaztCode);

# Tools Project Code && Design

## Express

> Express Js

[express](https://expressjs.com/es/)

```javascript

npm init

```

```javascript

npm install express --save

```

```javascript

npm install express

```

```javascript

entry point: (index.js)

```

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## Embedded JavaScript templates

> Embedded JavaScript templates (ejs)

[ejs_npm](https://www.npmjs.com/package/ejs)

```javascript

npm install ejs

```

> Example

```javascript

<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>

```

> Basic usage

```javascript
let template = ejs.compile(str, options);
template(data);
// => Rendered HTML string

ejs.render(str, data, options);
// => Rendered HTML string

ejs.renderFile(filename, data, options, function(err, str){
    // str => Rendered HTML string
});

```

## Nodemon (Node Js)

> Nodemon Install

[nodemon](https://nodemon.io/)

```javascript

npm install -g nodemon

npm install --save-dev nodemon

```

> Nodemon Documentation

[nodemon_gitHub](https://github.com/remy/nodemon#nodemon)

## Morgan NPM

> NPM Morgan

[morgan_npm](https://www.npmjs.com/package/morgan)

```javascript
npm i morgan
```

```javascript
var morgan = require('morgan')
```

```javascript

morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})

```

## Bootstrap

[Bootstrap](https://getbootstrap.com/)

> Build fast, responsive sites with Bootstrap

```javascript

npm i bootstrap@5.3.0-alpha1

```

> CDN Bootstrap

```javascript
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" </script>

```

## CDN (Content Delivery Network)

> CDN Js

[CDNjS](https://cdnjs.com/)

## Google FONTS

> Fonts

[Google_Fonts](https://fonts.google.com/)

## GitIgnore

> GitIgnore.io

[gitignore.io](https://www.toptal.com/developers/gitignore/)

### Project: Application With Node Js

> Home Application

![Home](./src/img/deskHome.png)

> About Application

![About](./src/img/deskAbout.png)

> Contact Application

![Contact](./src/img/deskContact.png)

> Mobile Project

> Home Mobile

![Home_Mobile](./src/img/mobHome.png)

> About Mobile

![About_Mobile](./src/img/mobAbout.png)

> Contact Mobile

![Contact_Mobile](./src/img/mobContact.png)
