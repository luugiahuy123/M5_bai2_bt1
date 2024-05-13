import logo from './logo.svg';
import './App.css';

function App() {

const arr = [
  {id : 1, name : "huy", address : "Quang Nam"},  
  {id : 2, name : "huy1", address : "Quang Nam1"},
  {id : 3, name : "huy2", address : "Quang Nam2"},
  {id : 4, name : "huy3", address : "Quang Nam3"},
  {id : 5, name : "huy4", address : "Quang Nam4"},
  {id : 6, name : "huy5", address : "Quang Nam5"}
]



  return (
   <>
   <table>
    <thead>
      <tr>
        <td>id</td>
        <td>Name</td>
        <td>Address</td>
      </tr>
    </thead>
    <tbody>
    {
    arr.map((item)=>(
      <tr key={item.id}>
<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.address}</td>
      </tr>
    ))
   }
    </tbody>
   </table>
   
   </>
  );
}

export default App;
