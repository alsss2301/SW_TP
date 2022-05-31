import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Join from "./Join";
import Login from "./Login";
import JoinFin from "./JoinFin";
import Certify from './Certify';
import UploadPage from "./UploadPage";
import Main from "./Main";
import Refer from "./Refer";
import MyInfo from "./MyInfo";
import ItemInfo from "./ItemInfo";
import Center from "./Center";
import Chat from "./Chat";
import Noti from "./Noti";
import Question from "./Question";
import WishList from "./WishList";
import UploadQuestion from "./UploadQuestion";
import DetailNoti from './DetailNoti';
import DetailQues from './DetailQues';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/Join" exact element={<Join />} />
      <Route path="/JoinFin" exact element={<JoinFin />} />
      <Route path="/Certify" exact element={<Certify />} />
      <Route path="/UploadPage" exact element={<UploadPage />} />
      <Route path="/Main" exact element={<Main />} />
      <Route path="/Refer" exact element={<Refer />} />
      <Route path="/MyInfo" exact element={<MyInfo />} />
      <Route path="/ItemInfo" exact element={<ItemInfo />} />
      <Route path="/Center" exact element={<Center />}/>
      <Route path="/Chat" exact element={<Chat />}/>
      <Route path="/Noti" exact element={<Noti />}/>
      <Route path="/Question" exact element={<Question />}/>
      <Route path="/WishList" exact element={<WishList />}/>
      <Route path="/UploadQuestion" exact element={<UploadQuestion />}/>
      <Route path="/DetailNoti" exact element={<DetailNoti />}/>
      <Route path="/DetailQues" exact element={<DetailQues />}/>
    </Routes>
  );
}

export default App;