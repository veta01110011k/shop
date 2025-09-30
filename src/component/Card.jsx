function Card(props) {
  console.log(props);
  return (
          <div className='card'>
              <div className='favorite'>
                <img width={30} height={30} src='/img/like.png' alt='like' />
              </div>
              <img width={133} height={133} src={props.imageUrl} alt="product" />
              <h5>{props.title}</h5>
              <div className='d-flex justify-between align-center'> 
                <div className='d-flex flex-column'>
                  <span>цена:</span>
                  <b>{props.price} руб.</b>
                </div>
                <button className='button' onClick={props.onClick}>
                  <img width={11} height={11} src="/img/+.png" alt="+" />
                </button>
              </div>
            </div>
    );
}

export default Card;
