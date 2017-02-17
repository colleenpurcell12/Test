import React from 'react';
//import { Link } from 'react-router';

class User extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(response => response.json())
        .then( user => {
            this.setState({
                user: user
            });
        });


        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
        .then(response => response.json())
        .then( repos => {
            this.setState({
                repos: repos
            });
        });
    }

    render() {

        if (!this.state.user) {
            return ( <div className="user-page">LOADING...</div> );
        }
        const user = this.state.user;
        const repos = this.state.repos;

        const repoList =[]
        if(repos){
            repos.forEach(repo => repoList.push([repo.name, repo.stargazers_count]))
        }
        const stat = {   
                name: 'Public Repos',
                value: user.public_repos            }

        return (

            <div className="user-page">
                <div className="user-info">
                    <div className="user-info__text">
                        <img className="user-info__avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h2 className="user-info__title"> {user.name}</h2>
                        <p className="user-info__bio">{user.bio}</p>
                    </div>
                </div>
                <div className="user-repos">
                    <h3 className="user-repos__title">Public Repositories (<span>{stat.value})</span></h3>
                    <ul>
                        { repoList.map( (repo, idx)=>
                        <li key={idx} className="user-repos__list" >{repo[0]}<span className="user-repos__star">✮ </span>{repo[1]}</li>
                           )}
                    </ul>
                </div>
            </div>
        );
    }
};

export default User;
