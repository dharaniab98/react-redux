import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store  from './store';
import Main from "./components/main.component"
function App () {
  return (
    <Provider store = {store}>

      {"this is my getting stored state"}
      <Main />
    </Provider>
  );
}


// import logo from './logo.svg';
// import './App.css';

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
