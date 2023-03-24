import { Routes, Route } from "react-router-dom";
import UsersFetch from "./components/UsersFetch";
import FriendsFetch from "./components/FriendsFetch";


function App() {
  
  
  return (
    <div>
      <Routes>

        <Route path="/" element={<UsersFetch />}/>
        <Route path="/friends" element={<FriendsFetch />}/>

      </Routes>
    </div>
  );
}

export default App;
