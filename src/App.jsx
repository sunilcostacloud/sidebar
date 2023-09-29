import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import MusicDashboard from "./pages/MusicDashboard";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./components/Layout";


const App = () => {

  return (
    <BrowserRouter>
      <Route render={(props) => (
        <Layout {...props}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user-dashboard" exact component={UserDashboard} />
            <Route path="/admin-dashboard" exact component={AdminDashboard} />
            <Route path="/music-dashboard" exact component={MusicDashboard} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      )} />
    </BrowserRouter>
  )
}

export default App