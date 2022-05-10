import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from "./data"

function App() {
  const articles = data.map(item => {
      return (
        <div>
        <Card
        key={item.id}
        {...item}
        />
        <hr/>
        </div>
      )
  })

  return (
    <div className="App">
      <Header />
      {articles}
    </div>
  );
}

export default App;
