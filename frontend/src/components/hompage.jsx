import React, { Component } from 'react'
import FormField from './form';
import Sidebar from './sidebar'
class Homepage extends Component {
    state = {  } 
    render() { 
        return (<div>
            <Sidebar/>
            <FormField />
            </div>);
    }
}
 
export default Homepage;