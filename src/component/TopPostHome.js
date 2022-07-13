import React from 'react';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { happy } from './Api';


const TopPostHome = ({blogs}) => {

    // const [data] = useContext(happy)


    return (
        <div>
            <p className='mainCategory'>Top Post</p>
            <hr className='mainCategoryHr' />
            <div>

                {blogs.filter((value) => value.id === 1 && value.name === "sports").map((val) => (
                    <div>
                        <Link to={`/article/${val.name}/${val.id}`}>

                            <div className='LatestContainer'>
                                <img src={val.urlToImage} className='LatestImg' alt='' />
                                <div className='flexBox'>
                                    <div>
                                        <p className='blogTitle'>{val.title}</p>
                                        <p className='blogCategory'>{val.name}</p>
                                    </div>
                                    <p className='LatestId'>{val.id}</p>
                                </div>
                            </div>
                            <hr className='blogLine' />
                        </Link>
                    </div>
                ))}


                {blogs.filter((value) => ((value.id === 2 && value.name === "Technology") || (value.id === 3 && value.name === "Hollywood") ||  (value.id === 4 && value.name === "Health"))).map((val) => (
                    <div>
                        <Link to={`/article/${val.name}/${val.id}`}>

                            <div className='SubContainer'>
                                <img src={val.urlToImage} className='SubImg' alt='' />
                                <div>
                                    <p className='blogTitle'>{val.title}</p>
                                    <p className='blogCategory'>{val.name}</p>
                                </div>
                                <p className='LatestId'>{val.id}</p>
                            </div>
                            <hr className='blogLine' />
                        </Link>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default TopPostHome;