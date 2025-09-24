import './App.scss'

function App() {
  return (
    <div className='wrapper clear'>
      <header className='d-flex justify-between align-center'>
      <div className='d-flex align-center'>
          <img width={60} height={60} src='public\img\logo.png' />
        <div className='headerInfo'>
          <h3 className='text-uppercase'>NAME SHOPS</h3>
          <p>слоган</p>
        </div>
      </div>

        <ul className='d-flex'>
          <li className='mr-30'>
           <img className='iconHerder' width={18} height={18} src='public\img\human.png'/>
          <samp>1205 руб</samp>
          </li>
          <li>
           <img className='iconHerder' width={18} height={18} src='public\img\basket.png'/>
          </li>
        </ul>
 </header>

  <div className='content p-40'>
    <h1 className='mb-40'> контент для магазина </h1>
 

   <div className='card'>
    <img width={133} height={133} src="public\img\product.img\content 1.jpg" alt="product" />
    <h5>нзвание товара</h5>
    <div className='d-flex justify-between align-center'> 
      <div className='d-flex flex-column'>
        <samp>цена:</samp>
        <b>1 997 pуб.</b>
        <button className='button'>
          <img width={11} height={11} src="public\img\+.png" alt="" />
        </button>
      </div>
    </div>
  </div>

  <div className='card'>
    <img width={133} height={133} src="public\img\product.img\content 2.jpg" alt="product" />
    <h5>нзвание товара</h5>
    <div className='d-flex justify-between align-center'> 
      <div className='d-flex flex-column'>
        <samp>цена:</samp>
        <b>1 997 pуб.</b>
        <button className='button'>
          <img width={11} height={11} src="public\img\+.png" alt="" />
        </button>
      </div>
    </div>
  </div>

  <div className='card'>
    <img width={133} height={133} src="public\img\product.img\content 3.jpg" alt="product" />
    <h5>нзвание товара</h5>
    <div className='d-flex justify-between align-center'> 
      <div className='d-flex flex-column'>
        <samp>цена:</samp>
        <b>1 997 pуб.</b>
        <button className='button'>
          <img width={11} height={11} src="public\img\+.png" alt="" />
        </button>
      </div>
    </div>
  </div>
   
 </div>
    </div>
  );
}

export default App
