import React from "react";
import styled from "styled-components";

export default function PhotoCard(props){
    const ApodCard = styled.div`
        color:white;
        background-color:lightgray;
    `;
    const ApodImgCont = styled.div`
        width: 45%;
        background-color:white;
    `;
    const ApodImg = styled.img`
        width:100%;
        background-color:white;
        padding: 20px;
    `;
    const InfoCont = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 40px;
    `;
    const InfoSect = styled.div`
        width: 45%;
        background-color:gray;
        padding: 20px;
    `;
    const H1Style = styled.h1`
        font-size: 60px;
        padding: 20px;
        background-color:gray;
    `;
    const H2Style = styled.h2`
        font-size: 30px;
    `;
    const H3Style = styled.h3`
        font-size: 15px;
    `;
    const PStyle = styled.p`
        font-size: 20px;
    `;

    return(
        <ApodCard>
            <H1Style>{props.title}</H1Style>
            <InfoCont>
                <ApodImgCont>
                    <ApodImg className="apod" alt="Picture of the Day" src={props.url} />
                </ApodImgCont>
                <InfoSect>
                    <H2Style>{props.author}</H2Style>
                    <H3Style>{props.date}</H3Style>
                    <PStyle>{props.info}</PStyle>
                </InfoSect>
            </InfoCont>
        </ApodCard>
    );
};
