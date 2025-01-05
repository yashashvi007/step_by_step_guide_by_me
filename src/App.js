import './categories.styles.scss';

// install sass
// npm i sass --save-dev
// https://sass-lang.com/guide/
const App = () => {
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

  // Ab ek chiz notice karo karishma ki category container wale div bar bar render ho rha hai map mai and hum title de rhe hai to iska component bana skte hai 
  // what i want you to do is map ke under wale ke pure div ka component bana do 
  // uske liye ek components ka ek folder banao
  // uske under category-item.component.jsx ka file banao and title as a prop do usme
  // <div className='categories-container'>
  //   {categories.map(({ title }) => (
  //       <div className='category-container'>
  //           <div className='background-image' />
  //           <div className='category-body-container'>
  //               <h2>{title}</h2>
  //               <p>Shop Now</p>
  //           </div>
  //       </div>
  //   ))}
  // </div>

  return (
    <div className='categories-container'>
      {/* render the categories using map and categoryItem component  */}
    </div>
  );
};

export default App;