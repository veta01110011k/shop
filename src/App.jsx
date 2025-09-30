import './App.scss'
import Card from './component/Card'
import Header from "./component/Header";
import Drawer from './component/Drawer' 

const arr = [
  {  
     title:'название товара ноль',
     price: 1997,
     imageUrl:'/img/product.img/content 1.jpg'
  },
  {  
     title:'название один',
     price: 900,
     imageUrl:'/img/product.img/content 2.jpg'
  },
  {  
     title:'название два',
     price: 1367,
     imageUrl:'/img/product.img/content 3.jpg'
  },
  {  
     title:'название три',
     price: 4000,
     imageUrl:'/img/product.img/content 1.jpg'
  },
  {  
     title:'название четыре',
     price: 1900,
     imageUrl:'/img/product.img/content 1.jpg'
  },
  { 
     title:'название пять',
     price: 1200,
     imageUrl:'/img/product.img/content 2.jpg'
  }
];

function App() {
  return (
    <>
<div className='wrapper clear'>

 <Drawer />
 <Header />

        <div className='content p-40 '>
          <div className='d-flex align-center mb-40 justify-between'>
            <h1>контент для магазина</h1>
            <div className='search-block d-flex'> 
              <img width={28} height={28} src='/img/search.png' alt='search'/>
              <input placeholder='поиск' />
            </div>
          </div>

          <div className='cards-container d-flex flex-wrap'>
            {arr.map((obj) => (
            <Card 
             title={obj.title}
             price={obj.price}
             imageUrl={obj.imageUrl}
             onClick={( )=> console.log(obj)} 
            />
             ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;