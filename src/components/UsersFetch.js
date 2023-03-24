import React, {useState, useEffect} from "react"
import UserList from "./UserList"
import styled from "styled-components"


 function UsersFetch() {
  
  const [usersData, setUsersData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)


  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNumber}/16`)
        const data = await response.json()
        setUsersData(prev => [...prev, ...data.list])
      } catch (error) {
        throw error
      }
    })()
  }, [pageNumber])

  window.onscroll = () =>{
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      setPageNumber(prev => prev + 1)
    
    }
  }


  const users = usersData && usersData.map(item => <UserList key={item.id} data={item}/>)

  return (
    <Container>
        <div>
        <div className="all_users">
        {users}
        </div>
        </div>
    </Container>
  );
}



const Container=styled.div`

.all_users {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

`


export default UsersFetch;