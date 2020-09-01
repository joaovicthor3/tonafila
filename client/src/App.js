import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';
import './App.css';


class App extends React.Component {
  state = {
    name: '',
    type: '',
    posts: []
  };

  componentDidMount = () => {
    this.getProductPost();
  };

  getProductPost = () => {
    axios.get('/api/products')
      .then((response) => {
        this.setState({ posts: response.data });
        console.log('Data has been received!');
      })
      .catch(() => {
        console.log('Error retrieving data!');
      });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (ev) => {
    ev.preventDefault();

    const payload = {
      name: this.state.name,
      type: this.state.type
    };

    axios({
      url: '/api/products',
      method: 'POST',
      data: payload
    })
      .then((data) => {
        console.log('Data has been sent to the server: ', data);
        this.resetUserInputs();
        this.getProductPost();
      })
      .catch(() => {
        console.log('Internal server error');
      });


  };

  resetUserInputs = () => {
    this.setState({
      name: '',
      type: ''
    });
  };

  displayProductPost = (posts) => {
    if(!posts.length) return null;
    else return posts.map((post, index) => {
        return (
          <div key={index} className="product-post_display">
            <h3>{post.name}</h3>
            <p>{post.type}</p>
          </div>
        );
      });
  };

  render() {

    console.log('State: ', this.state);
    //JSX
    return(
      <div className="app">
        <h2>Bem-vindo ao To na Fila!</h2>
        <form onSubmit={this.submit}>
          <div className="form-input"></div>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          <div className="form-input">
            <textarea
              name="type"
              colls="30"
              rows="10"
              value={this.state.type}
              onChange={this.handleChange}
            >
            </textarea>
          </div>

          <button>Submit</button>
        </form>

        <div className="product-post">
          {this.displayProductPost(this.state.posts)}
        </div>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
