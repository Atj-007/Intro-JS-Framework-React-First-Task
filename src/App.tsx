
import ProfileCard from './components/ProfileCard';
import './App.css';



function App() {
  const profiles = [
    {
      name: 'Hassen Saleh',
      image: 'https://i.postimg.cc/dQ4bF39D/hassen-saleh.jpgg',
      description: 'Frontend developer who loves clean UI and great UX.'
    },
    {
      name: 'Mohammed-Abba',
      image: 'https://i.postimg.cc/9F3CKrXT/mohammed-abba.png',
      description: 'UI/UX designer crafting delightful digital experiences.'
    },
    {
      name: 'Abdullahi-Adamu',
      image: 'https://i.postimg.cc/jSg9VF69/abdullahi-adamu.png',
      description: 'Software engineer passionate about scalable systems.'
    }
  ];

  return (
    <div className="app">
      <header className="app__header">
        <h1>Profile Cards</h1>
      </header>

      <main className="app__grid">
        {profiles.map((p, idx) => (
          <ProfileCard
            key={idx}
            name={p.name}
            image={p.image}
            description={p.description}
          />
        ))}
      </main>
    </div>
  );

}
export default App;