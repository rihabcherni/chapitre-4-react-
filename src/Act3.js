import React from "react";

class Act3 extends React.Component {
constructor(props){
    super(props)
    this.array=[{id:"01", name:"Mouhamed Tounsi",email:"mouhamed-tounsi@gmail.com",tel:"22-555-163"},
        {id:"02", name:"Foulen ben foulen",email:"Foulen.ben.foulen@gmail.com",tel:"55-555-106"}
     ]
}
    liste=(n)=>{
        return(
            <div style={{marginLeft:'40px'}}>
                <h2>Liste num {n-1}</h2>
                <ul>
                    {this.array.map((person)=>{
                        return(<li key={person.id}>{person.id}<br/>{person.name}<br/>{person.email}<br/>{person.tel}</li>)
                    })}
                </ul>
            </div>
          )
}

render(){
    return(
        <>
        <p style={{fontSize:"22px", color:"red", fontWeight:"bolder"}}>Activité 3 :</p>
        <p style={{fontSize:"22px", color:"blue", fontWeight:"bolder"}}>Liste de utilisateurs (liste simple):</p>
         <ul>
                    {this.array.map((person)=>{
                        return(<li key={person.id}>{person.id}<br/>{person.name}<br/>{person.email}<br/>{person.tel}</li>)
                    })}
        </ul>
        <p style={{fontSize:"22px", color:"blue", fontWeight:"bolder"}}>Liste de utilisateurs (imbriquer 2 listes):</p>
        {this.liste(1)}
        {this.liste(2)}
        </>
    )
}


} 

export default Act3;