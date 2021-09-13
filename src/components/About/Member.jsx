import React from 'react';

const Member = ({ member }) => {
    return (
        <div className='flex flex-col justify-center items-center rounded-xl cursor-pointer hover:shadow-lg transition-all duration-500 h-52 w-52 box-content p-8 mb-4'>
            <img className='h-40 w-40 object-cover rounded-full mb-2' src={member.img} alt={member.name} />
            <h3 className='text-xl mb-1'>{member.name}</h3>
            <h4 className='text-Pink'>{member.post}</h4>
        </div>
    )
}

export default Member;
