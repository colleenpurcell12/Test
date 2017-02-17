import React from 'react';
//import { Link } from 'react-router';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log("this.props.params",this.props.params)
        this.setState({
            usernameOne: this.props.params.usernameOne,
            usernameTwo: this.props.params.usernameTwo 
        });
        fetch(`https://api.github.com/users/${this.props.params.usernameOne}/followers`)
        .then(response => response.json())
        .then( followersOne => {
            this.setState({
                followersOne: followersOne
            });
        });

        fetch(`https://api.github.com/users/${this.props.params.usernameTwo}/followers`)
        .then(response => response.json())
        .then( followersTwo => {
            this.setState({
                followersTwo: followersTwo
            });
        });
    }

    render() {
        if (!this.state.followersOne || !this.state.followersTwo) {
            return ( <div className="user-page">LOADING...</div> );
        }

        const { followersOne, followersTwo, usernameOne, usernameTwo } = this.state

        // bart-jansen and Meixmc both follow trusktr, Basarqari, and etangreal

        const followersOneList =[]
        if(followersOne){
            followersOne.forEach(follower => followersOneList.push(follower.login))
        }
        const followersTwoList =[]
        if(followersTwo){
            followersTwo.forEach(follower => followersTwoList.push(follower.login))
        }

        const commonFollowers = []
        if(followersOneList && followersTwoList){
            followersOneList.forEach(function(follower){ 
                if(followersTwoList.includes(follower)){
                  commonFollowers.push(follower)
              }
            })
        }

        return (

            <div className="followers-page">
                
                <div className="followers-usernames">
                    <h3 className="followers-title">Common Followers of {usernameOne} and {usernameTwo}</h3>
                    <ul>
                        { commonFollowers.map( (follower, idx)=>
                        <li key={idx} className="followers-list" >{follower}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
};

export default Followers;
