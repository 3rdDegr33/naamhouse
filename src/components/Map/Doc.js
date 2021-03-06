import React from "react";

const Doc = ({center , selected}) => {
  return (
     <div className="sidebar">
      <div className="card-list">
        <article className="card">
            <h2>{`results - ${center.length}`}</h2>
    {center.map((e,i)=>{
        const {id,attributes:{name , phone:{fax , main}}} = e 
        const {zip , address_1 , address_2 , city , state}  = e.attributes.address.physical
        let option = selected === id? 'selected ':""
        return (
              <li key={i} className='card-footer' >
                <h2 className={option}> {`${name}`}</h2>
                <span>{`address1 : ${address_1}`}</span>
                <span>{`address2 : ${address_2}`}</span>
                <span>{`city: ${city}`}</span>
                <span>{`state: ${state}`}</span>
                <span>{`zip: ${zip}`}</span>
                <a href={`tel:+${main}`}> {`main: ${main}`}</a>
                <a href={`tel:+${fax}`}>{`fax: ${fax}`}</a>
              </li>
       )
})}
       </article>
      </div>
     </div>
  );
};

export default Doc;
