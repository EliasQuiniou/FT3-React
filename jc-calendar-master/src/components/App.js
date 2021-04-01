import react from 'react';
import {
  HashRouter,Route, Switch,
} from "react-router-dom";
import App1 from './page1';
import Accueil from './Accueil';

function App(){
  return(

  <HashRouter>
    <Switch>
      <Route exact path="/page1" >
        <App1/>

      </Route>
      <Route exact path="/">
            <Accueil/>
      </Route>
    </Switch>
  </HashRouter>

  );
}
export default App;