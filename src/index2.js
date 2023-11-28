import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';

// const myElem = React.createElement("h1",{},"Bonjour tout le monde");
// jsx
let a = 7;
let b = 66;
// const myElem = <div><h1>Bonjour tout le monde</h1><h1>Bonjour 2ACI INFO you are {(a>b)?a:b}</h1></div>;
function AddEtudiant(){
  var f,n,a,p ;
  function test(){
    f = document.getElementById('fname');
    n = document.getElementById('fname');
    a = document.getElementById('fname');
    console.log(f);

     p ={"id":f,"nom":n,"age":a}

  }
  return (
    <>
    <form className='center' onSubmit={test()}> 
  <label forName="fname"> Nom:</label><br/>
  <input type="text" id="fname" name="fname"/><br/>
  <label forName="lname"> Prenom:</label><br/>
  <input type="text" id="lname" name="lname"/><br/>
  <label forName="lname"> Age:</label><br/>
  <input type="text" id="lname" name="lname"/><br/>
  <input type="submit" value="Submit"/>
</form> 

<LisEtudiant parson={p}  />
</>
  )
}

function LisEtudiant(props){
var etudiants = [{"id":1,"nom":"elgharbaoui","age":22},
                  {"id":2,"nom":"test","age":23},
                  {"id":3,"nom":"abdel","age":15},
                  {"id":4,"nom":"test2","age":12}
];

etudiants.push(props.parson);
console.log(etudiants);
              return (
              <table className="center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Age</th>

                </tr>
              </thead>
              <tbody>
              
                {etudiants.map(elem=><tr><td>{elem.id} </td><td>{elem.nom}</td><td>{elem.age}</td>  </tr>)}
     
             
              </tbody>
            </table>

              )
            }

function Home(){
  const [compt,setConteur] = useState(0);


  return (<><h1>compteur {compt}</h1>
  <button onClick={()=>setConteur(compt+1)}>++</button>
  <button onClick={()=>setConteur(compt-1)}>- -</button>

      
          </>
  
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
