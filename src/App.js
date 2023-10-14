import './App.css';
import Card from './components/Card/Card.js';
import image from './livro.jpg'

function App() {
  return (
    <>
      <section className="cards">
        <Card title="Pequena loja de veneno" text="A pequena loja de venenos é uma ficção histórica estonteante sobre segredos, sonhos e as formas." button="Comprar" image={image}/>
        <Card title="Pequena loja de veneno" text="A pequena loja de venenos é uma ficção histórica estonteante sobre segredos, sonhos e as formas." button="Comprar" image={image}/>
        <Card title="Pequena loja de veneno" text="A pequena loja de venenos é uma ficção histórica estonteante sobre segredos, sonhos e as formas." button="Comprar" image={image}/>
      </section>
    </>
  );
}

export default App;
