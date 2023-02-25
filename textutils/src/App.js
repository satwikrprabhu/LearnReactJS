// import logo from './logo.svg';
import './App.css';
let name = "Satwik";
function App() {
  return (
   <>
   <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Services</li>
   </nav>
   <div className="container">
    <h1>Hello {name}</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae nobis illo autem pariatur quod corporis, praesentium non accusamus expedita, aperiam delectus magnam labore aut nisi ex nemo quo sed maiores. Obcaecati quis aut provident.</p>
   </div>
   </>
  );
}

export default App;
