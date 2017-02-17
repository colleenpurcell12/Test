import React from 'react';
//import { Link } from 'react-router';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log("this.props.params",this.props.params)

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
        //console.log({this.props})

        if (!this.state.followersOne || !this.state.followersTwo) {
            return ( <div className="user-page">LOADING...</div> );
        }
        const followersOne = this.state.followersOne;
        const followersTwo = this.state.followersTwo;

        // Meixmc/bart-jansen YES bart-jansen and Meixmc both follow trusktr

        const followersOneList =[]
        if(followersOne){
            followersOne.forEach(follower => followersOneList.push(follower.login))
        }
        console.log("Length of followersOneList",followersOneList.length)

        const followersTwoList =[]
        if(followersTwo){
            followersTwo.forEach(follower => followersTwoList.push(follower.login))
        }
        console.log("Length of followersTwoList",followersTwoList.length)

        const commonFollowers = []
        if(followersOneList && followersTwoList){
            followersOneList.forEach(function(follower){ 
                if(followersTwoList.includes(follower)){
                  commonFollowers.push(follower)
              }
            })
        }
        console.log("commonFollowers",commonFollowers)

        return (

            <div className="user-page">
                
                <div className="user-repos">
                    <h3 className="user-repos__title">Common Followers</h3>
                    <ul>
                        { commonFollowers.map( (follower, idx)=>
                        <li key={idx} className="user-repos__list" >{follower}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
};

export default Followers;
