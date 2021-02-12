import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Products from './Pages/Products';
import OurStores from './Pages/OurStores';
import Requests from './Pages/Requests';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import SignOut from './Pages/SignOut';

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/products" component={ Products }/>
            <Route exact path="/ourstores" component={ OurStores }/>
            <Route exact path="/requests" component={ Requests } />
            <Route exact path="/contact" component={ Contact }/>
            <Route exact path="/signin" component={ SignIn }/>
            <Route exact path="/signout" component={ SignOut }/>
        </Switch>
    );
}

export default Routes;