import "./App.css";
import ChaiCard from "./components/ChaiCard";
import Counter from "./components/Counter";
import { ChaiList } from "./components/ChaiList";
import type { Chai } from "./types";

const menu: Chai[] = [
  { id: 1, name: "Masala", price: 30 },
  { id: 2, name: "Normal", price: 12 },
  { id: 3, name: "Ginger", price: 68 },
];

function App() {
  return (
    <>
      <h1>Say hi to React with TS</h1>
      <ChaiCard name="Green Tea" price={30} />
      <ChaiCard name="Normal Tea" price={10} />

      <div>
        <Counter />
      </div>

      <div>
        <ChaiList items={menu} />
      </div>
    </>
  );
}

export default App;