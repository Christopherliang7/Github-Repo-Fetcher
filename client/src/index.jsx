import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  search (term) {
    // TODO
    $.ajax({
      url: '/repos',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({username: term}),
      success: () => {
        $.ajax({
          url: '/repos',
          type: 'GET',
          contentType: 'application/json',
          data: JSON.stringify({username: term}),
          success: (data) => {
            this.setState({repos: data})
          },
          error: (err) => {
            console.log('Failed GET request!', err);
          }
        });
      },
      error: (err) => {
        console.log('Failed POST request!', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));