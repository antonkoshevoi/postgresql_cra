require('dotenv/config');
const App = require('./app');
const IndexRoute = require('./routes/index.route');
const AuthRoute = require('./routes/auth.route');

const app = new App([new IndexRoute(), new AuthRoute()]);

app.listen();