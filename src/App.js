import "./App.css";
 import Index from "./screens/Index";
import { Provider } from "react-redux";
import { store } from  "./redux/store";
//import { store as store2 } from  "./redux2/store";
//import Index2 from "./screens/Index2";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Index  />
      </Provider>
      {/* <Provider store={store2}>
        <Index2/>
      </Provider> */}
    </div>
  );
}

export default App;
