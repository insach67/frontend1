import React, {  useState } from "react";
import { Link } from "react-router-dom";
import TopPostHome from "./TopPostHome";
import Advertisement from "./Advertisement"
// import { happy } from "./Api";

const LatestArticles = ({blogs}) => {
    // const [data] = useContext(happy)
    const [load, setLoad] = useState(true)

    return (

        <>
            <p className='mainCategory'>Latest Articles</p>
            <hr className='mainCategoryHr' />
            <div className='blogBody'>

                <div>
                    {blogs.filter((value) => (load ? (value.id <= 5) : (value.id <= 6)) && value.name === "Bollywood").map((val) => (

                        <div>
                            <Link to={`/article/${val.name}/${val.id}`}>

                                <div className='blogContainer'>
                                    <img src={val.urlToImage} className='blogImg' alt="" />
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
                        <button onClick={() => setLoad(!load)} className='btn'>{(load ? "View More" : "View Less")}</button>
                    </div>
                </div>

                <div>
                    <Advertisement />
                    <TopPostHome />
                </div>

            </div>
        </>



    );
}

export default LatestArticles;