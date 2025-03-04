import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "Mango 🥭",
      color: "red-yellow",
    },
    {
      id: 2,
      name: "Pineapple 🍍",
      color: "yellow-green",
    },
    {
      id: 3,
      name: "Blueberry 🫐",
      color: "blue",
    },
    {
      id: 4,
      name: "Peach 🍑",
      color: "peachy",
    },
    {
      id: 5,
      name: "Lemon 🍋",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      <Card name="🍌 banana" />
    </div>
  );
}
