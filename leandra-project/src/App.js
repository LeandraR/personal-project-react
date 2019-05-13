import React from "react";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./store/store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Login />
        </header>
      </div>
    </Provider>
  );
}

export default App;
