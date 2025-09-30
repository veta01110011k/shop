function Drawer() {
  return (
    <div className='overlay' style={{display: 'none'}}>
      <div className='drawer'>
        <h2 className='mb-10 justify-between d-flex'> 
          корзина 
          <img className='exit cu-p' width={18} height={18} src='/img/exit.jpg' alt='exit'/>
        </h2>

        <div className='drawerContent'>
          <div className="items">
            <div className="cartItem mb-20 d-flex align-center">
              <img className='mr-20' width={50} height={50} src="/img/product.img/content 1.jpg" alt="product" />
              <div className='mr-20'>
                <p className='mb-5'>текст к картинке</p>
                <p>1205руб</p>
              </div>
              <img className='exit' width={18} height={18} src='/img/exit.jpg' alt='exit'/>
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
            <button className='redButton'> 
              оформить заказ
              <img width={39} height={39} src='/img/arrow.png' alt='arrow'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;