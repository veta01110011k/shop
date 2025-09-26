import './App.scss'
function App() {
  return (
    <>
      <div className='overlay'>
        <div className='drawer'>
          <h2 className='mb-10 justify-between d-flex'> корзина 
            <img className='exit cu-p' width={18} height={18} src='public\img\exit.jpg' alt='exit'/>
          </h2>

          <div className='drawerContent'>
            <div className="items">
              <div className="cartItem mb-20 d-flex align-center">
                <img className='mr-20' width={50} height={50} src="public/img/product.img/content 1.jpg" alt="product" />
                <div className='mr-20'>
                  <p className='mb-5'>текст к картинке</p>
                  <p>1205руб</p>
                </div>
                <img className='exit' width={18} height={18} src='public\img\exit.jpg' alt='exit'/>
              </div>

              {/* остальные cartItem */}
            </div>

            <div className='cartTotalBlock'>
              <ul>
                <li>
                  <span>Итого: </span>
                  <div> </div>
                  <b>10 765руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>538руб.</b>
                </li>
              </ul>
              <button className='redButton'> оформить заказ
                <img width={39} height={39} src='public\img\arrow.png' alt='arrow'/>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='wrapper clear'>
        <header className='d-flex justify-between align-center'>
          <div className='d-flex align-center'>
            <img width={60} height={60} src='public/img/logo.png' alt='logo' />
            <div className='headerInfo'>
              <h3 className='text-uppercase'>NAME SHOPS</h3>
              <p>слоган</p>
            </div>
          </div>

          <ul className='d-flex'>
            <li className='mr-30'>
              <img className='iconHerder' width={18} height={18} src='public/img/human.png' alt='human'/>
              <span>1205 руб</span>
            </li>
            <li>
              <img className='iconHerder' width={18} height={18} src='public/img/basket.png' alt='basket'/>
            </li>
          </ul>
        </header>

        <div className='content p-40 '>
          <div className='d-flex align-center mb-40 justify-between'>
            <h1>контент для магазина</h1>
            <div className='search-block d-flex'>
              <img width={28} height={28} src='public/img/search.png' alt='search'/>
              <input placeholder='поиск' />
            </div>
          </div>

          <div className='d-flex'>
            <div className='card'>
              <div className='favorite'>
                <img width={30} height={30} src='public/img/like.png' alt='like' />
              </div>
              <img width={133} height={133} src="public/img/product.img/content 1.jpg" alt="product" />
              <h5>название товара</h5>
              <div className='d-flex justify-between align-center'> 
                <div className='d-flex flex-column'>
                  <span>цена:</span>
                  <b>1 997 руб.</b>
                </div>
              </div>
            </div>
                
            <div className='card'>
              <div className='favorite'>
                <img width={30} height={30} src='public/img/like.png' alt='like' />
              </div>
              <img width={133} height={133} src="public/img/product.img/content 2.jpg" alt="product" />
              <h5>название товара</h5>
              <div className='d-flex justify-between align-center'> 
                <div className='d-flex flex-column'>
                  <span>цена:</span>
                  <b>1 997 руб.</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="public/img/+.png" alt="+" />
                </button>
              </div>
            </div>
            
            <div className='card'>
              <div className='favorite'>
                <img width={30} height={30} src='public/img/like.png' alt='like' />
              </div>
              <img width={133} height={133} src="public/img/product.img/content 3.jpg" alt="product" />
              <h5>название товара</h5>
              <div className='d-flex justify-between align-center'> 
                <div className='d-flex flex-column'>
                  <span>цена:</span>
                  <b>1 997 руб.</b>
                </div>
                <button className='button'>
                  <img width={11} height={11} src="public/img/+.png" alt="+" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App