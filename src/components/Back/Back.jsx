import React, { useState, useEffect } from 'react'
import "./back.css"
import { backArrow, filter } from '../../assets'
const Back = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='container'>
            {
                windowWidth > 864 ?
                    (
                        <div>
                            <button>
                                <img src={backArrow} alt="back arrow" />
                            </button>
                            <h4>Back to Questions</h4>
                        </div>
                    ) : (
                        <div>
                            <h2>Practice Interview Questions</h2>
                            <h4>Embark on an Exploration:</h4>
                            <div className="filterAnswers">
                                <p>800 Questions Await!</p>
                                <button>
                                    <img src={filter} alt="filter" />
                                    <p>Filters</p>
                                </button>
                            </div>
                            <div className='answerTypes'>
                                <p>Popular </p>
                                <p>Complexity</p>
                                <p>Industry Type</p>
                                <p>Industry</p>
                                <p>Company Type</p>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Back