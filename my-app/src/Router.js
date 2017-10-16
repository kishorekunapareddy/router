import React from 'react'
import {BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const BasicExample = () => (
<Router>
<div>
<ul>
 <li><Link to="/hey">First</Link></li>
 <li><Link to="/hi">Middle</Link></li>
 <li><Link to="/amigo">Last</Link></li>
   </ul>
<Route exact path="/hey" component={Home}/>
<Route path="/hi" component={Chiken}/>
<Route path="/amigo" component={Dinner}/>
 </div>
</Router>
)
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
const Chiken = () => (
  <div>
    <h2>Chiken</h2>
  </div>
)
const Dinner = ({ match }) => (
<div>
 <h2>Dinner</h2>
 <ul>
 <li>
 <Link to={`${match.url}/28`}>
  Age
  </Link>
  </li>
  </ul>
  <Route path={`${match.url}/:topicId`} component={Topic}/>
 <Route exact path={match.url} render={() => (
 <h3>Have A Good Day.</h3>
    )}/>
  </div>
)
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
export default BasicExample;