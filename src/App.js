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

  // one main thing now App.js hamesh neat and clean and kam code hona chahiye to now 
  //  <div className='categories-container'>
  //             {categories.map((category) => (
  //                 <CategoryItem key={category.id} category={category} />
  //             ))}
  //  </div>
  // isko utha ke iska bhi ek compoent banao 
  // and directly us component ko yha render karao

  return (
    <>
      {/* yha karo us component ko render */}
    </>
  );
};

export default App;