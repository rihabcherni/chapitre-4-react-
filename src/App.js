import Act2 from "./Act2.js"
import Act3 from "./Act3.js"
   /*----------------Rappel map méthode----------------*/
        const array1=[1,4,9,16];
        //passer la fonction à map
        const map1 =array1.map(x=>x*2);
        console.log(map1);
        //résultat attendu :Tableau [2,8,18,32]
   /*----------------fin rappel map méthode----------------*/

   /*----------------Activité 1 ----------------*/
        const fruits=["apple","annanas", "Orange", "Plum"]
        fruits.map(el=> console.log(el))
    /*----------------fin Activité 1 ----------------*/
  function App(){
  return (
    <div style={{marginLeft:"50px"}} >
      {/*---------------- Activité 2 ----------------*/}
                <Act2/>
      {/*---------------- fin Activité 2 ----------------*/}

      {/*---------------- Activité 3 ----------------*/}
                <Act3/>
      {/*---------------- fin Activité 3 ----------------*/}
    </div>
  );}
export default App;
