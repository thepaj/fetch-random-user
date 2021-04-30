import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const API = 'https://randomuser.me/api/';

const fetchRandomData = async () => {
  const { data } = await axios.get(API);
  console.log(data);
  return data;
}

class App extends React.Component {
  state = {
    randomUser: '',
    name: '',
    picture: '',
  }

  componentDidMount = async () => {
    const randomUser = await fetchRandomData();
    const name = randomUser.results[0].name.first + ' ' + randomUser.results[0].name.last;
    const picture = randomUser.results[0].picture.thumbnail;
    this.setState({
      name,
      picture
    })
  }

  render() {
    const { name, picture } = this.state;

    return(
      <div>
        <button onClick={fetchRandomData}>
          Fetch Random Data
        </button>
        <p>
          {name}
        </p>
        <img src={picture} alt="user-thumbnail"/>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

