import React from 'react';
import { browserHistory as history } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitUser = this.handleSubmitUser.bind(this);
        this.handleSubmitFollowers = this.handleSubmitFollowers.bind(this);
    }
    handleSubmitUser(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
    }
    handleSubmitFollowers(e) {
        e.preventDefault();
        history.push(`/followers/${this.refs.accountOne.value}/${this.refs.accountTwo.value}`)
    }
//Search For Common Followers
    render() {
        return (
            <div className="search-page">
                <h2>Find Repos by Github UserName</h2>
                <form className="search-form" 
                    onSubmit={this.handleSubmitUser}>

                    <input ref="userInput" className="search-page__input" type="text" placeholder="GitHub Username"/>

                    <button className="search-page__button">Search</button>
                </form>

                <h2>Find The Common Followers Between Users</h2>
                <form className="search-form" 
                    onSubmit={this.handleSubmitFollowers}>

                    <input ref="accountOne" className="search-page__input" type="text" placeholder="1st Username"/>
                    <input ref="accountTwo" className="search-page__input" type="text" placeholder="2nd Username"/>

                    <button className="search-page__button">Search</button>
                </form>
            </div>
        );
    }
};

export default Search;
