import React from 'react';

class Followers extends React.Component {
    
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        const { usernameOne, usernameTwo } = this.props.params
        this.setState({ usernameOne, usernameTwo });

        fetch(`https://api.github.com/users/${this.props.params.usernameOne}/followers`)
        .then(response => response.json())
        .then( followersOne => { this.setState({ followersOne });
        });

        fetch(`https://api.github.com/users/${this.props.params.usernameTwo}/followers`)
        .then(response => response.json())
        .then( followersTwo => { this.setState({ followersTwo });
        });
    }

    render() {

        // content displayed while 'common followers' list is generated, 
        // or in case inputs weren't valid usernames
        if (!this.state.followersOne || !this.state.followersTwo) {
            return ( <div className="user-page">LOADING...</div> );
        }

        const { followersOne, followersTwo, usernameOne, usernameTwo } = this.state

        let followersTwoList = [],
            commonFollowers = []
         
        // creates an strings array of login names (followersTwoList) for comparison with objects array (followersOne)
        if(followersTwo){ 
            followersTwo.forEach(follower => followersTwoList.push(follower.login))
        }

        if(followersOne && followersTwoList){
            followersOne.forEach(function(follower){ 
                if(followersTwoList.includes(follower.login)){
                  commonFollowers.push(follower.login)
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
