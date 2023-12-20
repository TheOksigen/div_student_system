import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calendar from './components/Calendar';
import Teams from './components/Teams';
import Directory from './components/Directory';
import Announcements from './components/Announcements';
import Map from './components/Map';
import Grouptable from './components/Grouptable';
import Login from './login/Login';
import Layoutcopy from './components/core/Layoutcopy';
import Error from './components/Error';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useLoginRefreshMutation } from './store/apis/auth';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [cookies] = useCookies(['access_token']);
  const [userReq, loginData] = useLoginRefreshMutation();

  useEffect(() => {
    loginCheck();
    if (!isAuthenticated) {
    }
  }, [isAuthenticated]);

  const loginCheck = () => {
    const accessToken = cookies['access_token'];
    if (accessToken) {
      userReq(accessToken);
      console.log(loginData)

    }
  };
  //loginCheck()
  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="/" element={<Login />} />
      ) : (
        <Route
          path="/"
          element={
            <Layoutcopy>
              <Route path="home" element={<Home />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="calendar/group_table" element={<Grouptable />} />
              <Route path="teams" element={<Teams />} />
              <Route path="directory" element={<Directory />} />
              <Route path="announcements" element={<Announcements />} />
              <Route path="map" element={<Map />} />
            </Layoutcopy>
          }
        />
      )}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
