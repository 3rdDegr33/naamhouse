import React from "react";

const Document = ({center}) => {
  return (
     <div className="sidebar">
      <div className="card-list">
        <article className="card">
    {center.map((e,i)=>{
        const {attributes:{name , phone:{fax , main}}} = e 
        const {zip , address_1 , address_2 , city , state}  = e.attributes.address.physical
        return (
              <li key={i} className="card-footer">
                <h2> {`${name}`}</h2>
                <span>{`address1 : ${address_1}`}</span>
                <span>{`address2 : ${address_2}`}</span>
                <span>{`city: ${city}`}</span>
                <span>{`state: ${state}`}</span>
                <span>{`zip: ${zip}`}</span>
                <span> {`main: ${main}`}</span>
                <span>{`fax: ${fax}`}</span>
              </li>
       )
})}
       </article>
      </div>
     </div>


    // <div class="sidebar">
    //   <div class="card-list">
    //     <article class="card">
    //       <div class="card-header">
    //         <input placeholder="search" />
    //       </div>
    //       <div class="card-footer">
    //         <p>hello</p>
    //       </div>
    //     </article>
    //   </div>
    // </div>

    
  );
};

export default Document;
