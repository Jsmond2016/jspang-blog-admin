/*
 * @Description: 
 * @Date: 2020-11-30 16:41:20
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */


import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login'
import Index from './Index'
function Main() {
    return (
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/index/" component={Index} />
        </Router>
    )
}
export default Main