import "./App.css";

import store from "./store";
import { Provider } from "react-redux";
import Posts from "./comps/Posts";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h2>hey '_'</h2>
        </header>
        <Posts />
      </div>
    </Provider>
  );
}
export default App;
