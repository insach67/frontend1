import React,{useEffect,useState} from 'react';

import axios from "axios"
import Intro from "./Intro"
import TheLatest from "./TheLatest"
import LatestArticles from "./LatestArticles"
import LatestStories from "./LatestStories"
import '../App.css';


const Home =() => {

    const[blogs, setBlogs] = useState([]);

    useEffect(() => {

        axios.get(`https://back1i.herokuapp.com/api/v1/TheSiren`).then(
            data => setBlogs(data.data)
        )

    },[])
    return (
       
        <div>
            <Intro blogs={blogs}/>
            <TheLatest blogs={blogs}/>
            <LatestArticles blogs={blogs}/>
            <LatestStories blogs={blogs} />
        </div>
    
    );
}

export default Home;