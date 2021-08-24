
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Error404 from "./pages/error404";
function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" component={Dashboard} exact={true}/>
            <Route path="/login" component={Login} exact={true} />
            <Route path="*" component={Error404}/>
        </Switch>
    </Router>
  );
}

export default App;
