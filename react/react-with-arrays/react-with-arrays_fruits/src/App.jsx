import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "Mango 🥭",
      color: "orange",
    },
    {
      id: 2,
      name: "Pineapple 🍍",
      color: "linear-gradient(90deg, rgba(255,252,0,1) 0%, rgba(255,252,0,1) 47%, rgba(65,255,0,1) 79%, rgba(65,255,0,1) 100%)",
    },
    {
      id: 3,
      name: "Blueberry 🫐",
      color: "cornflowerblue",
    },
    {
      id: 4,
      name: "Peach 🍑",
      color: "coral",
    },
    {
      id: 5,
      name: "Lemon 🍋",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => 
      <Card key={fruit.id} name={fruit.name} color={fruit.color}/>)}
    </div>
  );
}
