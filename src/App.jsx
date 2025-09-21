import './App.scss'

function App() {
  return (
    <div className='wrapper'>
      <header>
      <div className='headerLeft'>
          <img width={60} height={60} src='public\img\logo.png' />
        <div className='headerInfo'>
          <h3>название магазина</h3>
          <p>слоган</p>
        </div>
      </div>

        <ul className='HeaderRight'>
          <li>
           <img width={28} height={28} src='public\img\dog.png'/>
          <samp>1205 руб</samp>
          </li>
          <li>
           <img width={18} height={18} src='public\img\basket.png'/>
          </li>
        </ul>
 </header>

  <div className='content'>
    <h1> контент для магазина </h1>
       .....
  </div>

    </div>
  );
}

export default App
