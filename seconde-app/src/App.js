import React, { Component } from 'react'
import { Route  , Switch} from 'react-router-dom'
import Nav from './components/Nav'
import HomePage from "./components/HomePage"
import ProductPage from "./components/Product"
import BlogPage from "./components/Blog"
import AboutUsPage from "./components/AboutUs"

export default class App extends Component {
  render() {
    return (
      <div>
          <div>
          <Nav />
          <Switch>

          <Route path="/blog" render={(props)=> <BlogPage name="mammadk9" {...props}/>}/>
          <Route path="/shop" component={ProductPage}/>
          <Route path="/About-us" component={AboutUsPage}/>
          <Route exact path="/" component={HomePage}/>
            
          </Switch>

          </div>

        
      </div>
    )
  }
}
