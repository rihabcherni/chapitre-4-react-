import React from "react";

class Act2 extends React.Component {
    constructor(props){
    super(props)
    this.films=[
        {id:1, name:"Fausee note"},
        {id:2,name:"l'enfant du soleil"},
        {id:3,name:"El Jaida"},
        {id:4,name:"Dachra"},
        {id:5,name:"Porto Farina"}]}
render(){
    return(
        <div>
            <p style={{fontSize:"22px", color:"red", fontWeight:"bolder"}}>Activité 2 : Liste de films</p>
            <ul>
                {this.films.map((f)=>{
                    return(<li key={f.id}>{f.id+" : "+f.name}</li>)
                })}
            </ul>
        </div>
        )
}}
export default Act2;


