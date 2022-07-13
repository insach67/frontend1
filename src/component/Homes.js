import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Advertisement from './Advertisement';
import TopPost from './TopPost';
import axios from 'axios';
// import { happy } from './Api';


const Homes = () => {

    // const [data] = useContext(happy)

    const { cat } = useParams()

    const [load, setLoad] = useState(true)
    const[blogs, setBlogs] = useState([]);
    useEffect(() => {

        axios.get(`https://back1i.herokuapp.com/api/v1/TheSiren/${cat}`).then(
            data => setBlogs(data.data)
        )

    },[cat])

    return (

        <div className='blogBody'>
            <div>
                <p className='mainCategory'>{cat}</p>
                <hr className='mainCategoryHr' />

                {blogs.filter((value) => (load ? (value.id <= 4) : (value.id <= 5)) && value.name === cat).map((val) => (

                    <div>
                        <Link to={`/article/${val.name}/${val.id}`}>

                            <div className='blogContainer'>
                                <img src={val.urlToImage} className='blogImg' alt='' />
                                <div className='blogContent'>
                                    <p className='blogTitle'>{val.title}</p>
                                    <p className='blogDetail'>{val.description.substring(0, 150)}...</p>
                                    <p className='blogCategory'>{val.name}</p>
                                </div>
                            </div>
                        </Link>

                        <hr className='blogLine' />
                    </div>

                ))}

                <div className='btn'>
                    <button onClick={() => setLoad(!load)} className='btn'>{(load ? "Load More" : "View Less")}</button>
                </div>

            </div>

            <div>
                <TopPost blogs={blogs}/>
                <Advertisement />
            </div>

        </div>
    );

}

export default Homes;