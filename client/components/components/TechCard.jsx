import React from 'react';

const TechCard = ({ title }) => {
    return (
        <div className='w-36 mr-64'>
            <span className='font-semibold me-text'>
                {title}
            </span>
            <hr className='h-[2px] bg-black'/>
        </div>
    );
};

export default TechCard;