import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
  const BEARER_TOKEN = 'i6q8cfgpqWfFopwlLkT9P1P_C8uyeIGG5kKXqKpXXIc6ng6lAe4qPsZVDptMWMF4f1pjLn8oIh8uKHy3BmfMbbyPs3_yoHMdJHnDeGzs3eC8YILO6r-y5oTBfFS6YXYx';
  function fetchReq(){
    // const options = {
    //   headers: {
    //     'Authorization': `Bearer ${BEARER_TOKEN}`,
    //     'Origin': 'localhost:3000',
    //     'withCredentials': true,
    //   }
    // }
    // fetch(`https://api.yelp.com/v3/businesses/search` ,  {
    //   headers: {
    //     Authorization: `Bearer ${BEARER_TOKEN}`,
    //     withCredentials: true,
    //     "Access-Control-Allow-Origin": "*",
    //     'Content-Type':  'application/json'
    //   },
    //   params: {
    //     term: 'food',
    //     location: 'NYC'
      
    // }})
    // .then(data => data.json())
    // .then(resp =>  console.log("resp",resp))
   axios.get(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search` , {
      headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            withCredentials: true,
            "Access-Control-Allow-Origin": "*",
            'Content-Type':  'application/json'
          }, params: {
                term: 'food',
                location: 'NYC'
              
            }

    }).then(({data})=>console.log(data) )

    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={fetchReq}>fetch</button>
      </header>
    </div>
  );
}

export default App;
