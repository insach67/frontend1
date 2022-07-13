import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { happy } from "./Api";

const LatestStories = ({blogs}) => {
    // const [data] = useContext(happy)

    const [load, setLoad] = useState(true)

    return (


        <div className='TheLatestContainer'>
            <p className='mainCategory'>Latest Stories</p>
            <hr className='mainCategoryHr' />
            <hr />
            <div className='TheLatestBox'>
                {blogs.filter((value) => (load ? (value.id === 2) : (value.id <= 5)) && (value.name === "Technology" || value.name === "Health" || value.name === "Hollywood")).map((val) => (
                    <>
                        <Link to={`/article/${val.name}/${val.id}`} className='TheLatestStories'>
                            <p className='title'>{val.title}</p>
                            <p className='body'>{val.description.substring(0, 200)}...</p>
                            <p className='body'><strong>{val.name}</strong>/ {val.publishedAt}</p>
                        </Link>
                        <hr className='TheLatestStoriesHr' />
                    </>

                ))}
            </div>
            <hr />
            <div className='btn'>
                <button onClick={() => setLoad(!load)} className='btn'>{(load ? "View More" : "View Less")}</button>
            </div>

        </div>


    );
}


export default LatestStories;