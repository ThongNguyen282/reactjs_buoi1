import React, { Component } from 'react';
import Banner from './Banner';
import Item from './Item';

class Body extends Component {
    render() {
        return (
            <div className='container'>
                <Banner />
                <div className="row">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        )
    }
}

export default Body;