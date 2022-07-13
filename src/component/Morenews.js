import React from 'react';
// import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import {happy} from "./Api"

const Morenews = ({blogs}) => {

    // const [data] = useContext(happy)

    

    return (
        <div className='MoreFromSirenContainer'>
            <p className='mainCategory'>More News</p>
            <hr />

            <div className='TheLatestBox'>
                {blogs.filter((value) => (value.id === 3) && (value.name === "Bollywood" || value.name === "Business" || value.name === "Hollywood")).map((val) => (

                    <Link to={`/article/${val.name}/${val.id}`} className='TheLatestContent'>
                        <p className='body'>Related reads</p>
                        <img src={val.urlToImage} className='TheLatestImg' alt='' />
                        <p className='title'>{val.content}</p>

                        <p className='body'><strong>{val.name}</strong>/ {val.publishedAt}</p>
                    </Link>
                ))}
            </div>



        </div>
    );
};

export default Morenews;