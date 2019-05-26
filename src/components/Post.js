import React, {Component} from 'react';
import User from './User';

export default class Post extends Component{
    render(){
        return(
            <div className="post">
                <User 
                src="http://steezo.com/wp-content/uploads/2012/12/man-in-suit2.jpg"
                alt="prince"
                name="kylyshbay"
                min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    a hehehe ehhe ehehhe heheh ehhe :)
                </div>
            </div>
        )
    }
}