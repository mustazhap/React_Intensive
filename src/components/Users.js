import React, {Component} from 'react';
import User from './User';  
import InstaService from '../services/instaservice';

export default class Users extends Component{
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount(){
        this.UpdatePosts();
    }

    UpdatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.inError)
    }

    onPostsLoaded = (posts) => {
        this.setState(
            {
                posts,
                error: false
            }
        )
    }

    onError = (err) =>{
        this.setState({
            error: true
        })
    }

    renderItems(arr){
        return arr.map(item => {
            const {name, altname, photo, id} = item;

            return (
                <a key={id} href="#" className={id == 1 ? "user" : "user min"}>
                    <img src={photo} alt={altname}></img>
                    <div>{name}</div>
                </a>
            )
        })
    }

    render() {
        const {error, posts} = this.state;
            
        if ( error){
            return ("asd");
        }
        const users = this.renderItems(posts);

        return(
        
        <div className="right">
            {users[0]}
            
            <div className="users__block">
            {users}
            
            </div>
        </div>
        )
    }

}