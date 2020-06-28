import React from 'react'
import Person from './Person'
import people from './People';
export default function PersonList() {
   
    
    return (
        <div>
              <section>
                     {
                         people.map((value,index)=>{
                             return (<Person  img={value.img} name={value.name} job={value.job} desc={value.description}/>)
                         })
                     }
              </section>
             
        </div>
    )
}
