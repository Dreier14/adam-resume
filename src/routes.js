import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

export default  (
           <Switch>
               <Route exact path="/" component={Home} />
               <Route path ="/Contact" component={Contact}/>
               <Route path="/Projects" component={Projects}/>
           </Switch>           
        );
    