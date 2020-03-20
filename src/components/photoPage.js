import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./photoCard";
import SearchBar from "./searchBar";
import styled from "styled-components";

export default function PhotoGrid() {
    const [apod, getApod] = useState();
    const [date, setDate] = useState();
    let newDate = `&date=${date}`
    useEffect(() => {
        date ? axios.get(`https://api.nasa.gov/planetary/apod?api_key=r2EYWFxAfhJnnsMbLpuGSTFCMeNwJbbzxIJMHZpS${newDate}`)
        .then(response => {
            const picture = response.data;
            getApod(picture);
        })
        .catch(error => {
            console.log("Whoops check your code, somethings wrong!", error);
        }) :
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=r2EYWFxAfhJnnsMbLpuGSTFCMeNwJbbzxIJMHZpS`)
        .then(response => {
            const picture = response.data;
            getApod(picture);
        })
        .catch(error => {
            console.log("Whoops check your code, somethings wrong!", error);
        })
    }, [date]);

    const NavBar = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;
    const Container = styled.div`
        background-color: black;
        color: white;
        padding: 20px;
    `;
    const H1Title = styled.h1`
        font-size: 30px;
    `;
    return (
        <Container>
            <NavBar>
                <H1Title>NASA Photo of the Day!</H1Title>
                <SearchBar setDate={setDate}/>
            </NavBar>
                {apod && <PhotoCard title={apod.title} author={apod.copyright} date={apod.date} info={apod.explanation} url={apod.url}/>}           
        </Container>
    );
}