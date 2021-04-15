import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  
  } from "react-router-dom";
  import TextComponent from './components/TextComponent'

class App extends React.Component{



    render(){
        return (
            <Router>
                
                <ul class="flex border-b">
                <NavLink to= '/text'>
                <li class="-mb-px mr-1">
                    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="#">Text</a>
                </li>
                </NavLink>
                <li class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Charter</a>
                </li>
                </ul>
                
            <div>
            <Switch>
               <Route exact path = '/text'>
               <TextComponent/>
               </Route>
               </Switch>
            </div>
            </Router>
        )
    }
}




export default App;