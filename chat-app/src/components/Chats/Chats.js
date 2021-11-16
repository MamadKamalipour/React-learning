import React, { useEffect, useState, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { auth } from "../../firebase/firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContextProvider";

import styles from "./Chats.module.css";

const Chats = () => {
  const [loading, setloading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "b3315e6c-1e46-42b5-b300-2b713b5da455",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
          setloading(false)
      }).catch(()=>{
          let formdata = new FormData()
          formdata.append("email",user.email)
          formdata.append("username",user.email)
          formdata.append("secret",user.uid)
          formdata.append("secret",user.uid)
          getFile(user.photoURL)
          .then(avatar =>{
              formdata.append("avatar",avatar,avatar.name)
              axios.post("https://api.chatengine.io/users",formdata,{headers:{
                  "private-key":"8c82929d-f91e-4ac0-9a97-9afc8d119b74"
              }})
              .then(()=> setloading(false))
              .catch(error => console.log(error))
          })
      })

  }, [user, history]);

  const getFile = async (url)=>{
      const response = await fetch(url)
      const data = await response.blob()
      return new File([data ], "userPhoto.jpg", {type: "image/jpeg"})
  }

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading) return "loading...";
  return (
    <div className={styles.container}>
      <Navbar logout={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 70px)"
        projectID="b3315e6c-1e46-42b5-b300-2b713b5da455"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
