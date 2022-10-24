import React from 'react'

export default function Liste({list, setValgtListe}){

  const listeValgt = list.title;
  
  
    return (
      <div>
        <p onClick={() => setValgtListe(String(listeValgt))}>{list.title}</p>
      </div>
    );
}




