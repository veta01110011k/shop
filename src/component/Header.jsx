function Header() {
  return (
    <header className='d-flex justify-between align-center'>
      <div className='d-flex align-center'>
        <img width={60} height={60} src='/img/logo.png' alt='logo' />
        <div className='headerInfo'>
          <h3 className='text-uppercase'>NAME SHOPS</h3>
          <p>слоган</p>
        </div>
      </div>

      <ul className='d-flex'>
        <li className='mr-30'>
          <img className='iconHerder' width={18} height={18} src='/img/human.png' alt='human'/>
          <span>1205 руб</span>
        </li>
        <li>
          <img className='iconHerder' width={18} height={18} src='/img/basket.png' alt='basket'/>
        </li>
      </ul>
    </header>
  );
}

export default Header;