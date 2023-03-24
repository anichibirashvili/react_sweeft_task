import React from "react";
import { useState, useEffect } from "react";
import {useLocation } from "react-router-dom";
import FriendList from "./FriendsList";
import UserPage from "./UserPage";
import styled from "styled-components";

function FriendsFetch() {
    
    const [friendsData, setFreindsData] = useState([])
    const [pageNumberFriend, setPageNumberFriend] = useState(1)

    const { state } = useLocation()
    const [user, setUser] = useState(state.id)
    
    useEffect(()=>{
    (async ()=>{
        try{
            const response = await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${state.id}/friends/${pageNumberFriend}/16`)
            const data = await response.json()
            setFreindsData(prev => [...prev, ...data.list])
        }catch(error){
            throw error
        }  
    })()
    }, [pageNumberFriend, state.id])

    useEffect(() =>{
        try{
        (async ()=>{
            const response = await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${state.id}`)
            const data = await response.json()
            setUser(data)
        })()

        }catch(error){
            throw error
        }
    },[state.id])

    window.onscroll = () =>{
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      setPageNumberFriend(prev => prev + 1)

    }
  }

    const list = friendsData.map(item => <FriendList key={item.id} data={item} />)
    const userinfo =  <UserPage  key={user.id} data={user} />
  
    return(
    <Container>
        <div>
            <div className="about_user">
                {userinfo}
            </div>
            <div className="all_users">
                {list}
            </div>
        </div>
    </Container>
    )

}   


const Container=styled.div`


.all_users {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
}

`


export default FriendsFetch;