import './App.css';

const root = document.documentElement;
const innerWidth = 2000;

root.addEventListener('mousemove', e => {
   let x = e.clientX / innerWidth,
       y = e.clientY / innerWidth;
   x = Math.floor(Math.sqrt(x) * Math.sqrt(y) * 150 - 1000);
   
   root.style.setProperty('--h', x);
});

function App() {
  return (
    
  <div className='container'>
    <p>studio_H27</p>
  </div>

  );
}

export default App;
