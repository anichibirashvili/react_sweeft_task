import React from "react"
import { useNavigate  } from "react-router-dom"
import styled from "styled-components"

function UserList(props) {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/friends',{
            state:{
                id: props.data.id
            }
        })
    }
    return(
        <Container>
            <div className="box" onClick={handleClick}>
                <div className="box_item">
                <div className="image" key={props.data.id} >
                    <img src={`${props.data.imageUrl}?v=${props.data.id}`} 
                    alt={props.data.name + " " + props.data.lastName} />
                </div>
                <div className="full_name">
                    <h2>{props.data.prefix} {props.data.name} {props.data.lastName}</h2>
                    <p>{props.data.title}</p>
                </div>
                </div>
            </div>
        </Container>
      
    )
}

const Container=styled.div`

    .box {
        width: 25%;  
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap; 
    }

    .box_item {
        margin: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
    }

    .box img {
        width: 100%
    }

    .image {
        overflow-clip-margin: content-box;
        overflow: clip;
    }

    .full_name {
        padding: 2px 10px;
    }

`





export default UserList;