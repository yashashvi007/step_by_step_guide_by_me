const App = () => {
  // okay so what we are doing here: kapdo ki category hogi and user select kr skta hai ki konsi category mai jana hai
  // what i want you to do is now: despite ki mai bar bar 
  // <div className='category-container'>
  //       {/* <img /> */}
  //       <div className='category-body-container'>
  //         <h2>Hats</h2>
  //         <p>Shop Now</p>
  //       </div>
  //  </div>
  // aise sare categories ke divs render karu, i want ki sare categories ko map method lagake ke render karu

  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mens',
    },
  ];

  // is categories ke array ko use karo and sari cateogories ko render karo map use krke
  // things to take note of
  // 1.map mai map(() => ()) and map(()=> return {}) mai kya difference hota hai
  // map(()=> {}) ye error deta hai to please see that error too.
  // 2. why we use key in map


  return (
    <div className='categories-container'>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Hats</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Jackets</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Sneakers</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Womens</h2>
          <p>Shop Now</p>
        </div>
      </div>
      <div className='category-container'>
        {/* <img /> */}
        <div className='category-body-container'>
          <h2>Mens</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default App;

