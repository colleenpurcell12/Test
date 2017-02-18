import React from 'react';
//import { Link } from 'react-router';

class User extends React.Component {
    constructor() {
        super();
        //this.state = {};
        this.state = { filter: '' };
        this.handleChange = this.handleChange.bind(this);
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

    handleChange (evt) {
      const filter = evt.target.value.toLowerCase();
      this.setState({ filter });
    }

    render() {
        const { user, repos, filter } = this.state;

        //const { filter } = this.state;
        //console.log("this.props",this.props)
        // let { products } = this.props;

        if (!this.state.user) {
            return ( <div className="user-page">LOADING...</div> );
        }

        let repoList =[]
        if(repos){
            repoList= repos
            .filter (repo => repo.name.toLowerCase().includes(filter))
            .map(repo => [repo.name, repo.stargazers_count])
        }

        // if(filter) repos = repoList.filter (repo => repos[0]toLowerCase().match(filter))


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
                    <input 
                      type='text'
                      value={filter}
                      placeholder='Filter by repo name'
                      onChange={this.handleChange}
                      className='user-search-bar'
                    />
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
