import React from 'react'

export default function Person(props) {
    const url=`https://randomuser.me/api/portraits/thumb/men/${props.img}.jpg`;
    return (
        <div className='person'>
               <img src={url} alt='error'/>
                <div>
                     <h4>{props.name}</h4>
                    <h4>{props.job}</h4>
                     <p>{props.desc}</p>
                </div>
        </div>
    )
}
