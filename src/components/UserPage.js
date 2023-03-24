import React from "react";
import styled from "styled-components";


const UserPage = (props) => {
  return (
    <Container >
    <div className="whole_page">        
        <img className="user_image"
          src={`${props.data.imageUrl}?v=${props.data.id}`}
          alt="image"
        /> 
        <h2>{props.data.name} {props.data.lastName}</h2>
    </div>
    <div className="user_info">
        <legend>Info</legend>

        <h2>{props.data.prefix} {props.data.name} {props.data.lastName}</h2>
        <p>{props.data.title}</p>
        <br />
        <p>Email: {props.data.email}</p>
        <p>Ip Address: {props.data.ip}</p>
        <p>Job Area: {props.data.jobArea}</p>
        <p>Job Type: {props.data.jobType}</p>
    </div>

    <div className="company_addresss">
        <legend>Address</legend>
        <h2>
            {props.data.company?.name + props.data.company?.suffix}
        </h2>
        <p>City: {props.data.address?.city}</p>
        <p>Country: {props.data.address?.country}</p>
        <p>State: {props.data.address?.state}</p>
        <p>Street Address: {props.data.address?.streetAddress}</p>
        <p>ZIP: {props.data.address?.zipCode}</p>
    </div>
    </Container>
  );
};


const Container=styled.div`

display: flex;
justify-content: start;
padding: 20px;
align-items: center;


 

.user_image {
    height: 200px;
  }


.user_info {
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
    border-width: 2px;
    border-style: groove;
    border-color: rgb(192, 192, 192);
    border-image: initial;
    margin-left: 20px;
    width: 50%
  }

  .company_addresss {
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
    border-width: 2px;
    border-style: groove;
    border-color: rgb(192, 192, 192);
    border-image: initial;
    height:300px
  }
`

export default UserPage;