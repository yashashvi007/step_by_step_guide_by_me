import Directory from './components/directory/directory.component';

const App = () => {

  // Great job karishma 🥳
  // You are finally here 
  // okay so ab karenge routing 
  // whats is routing? 
  // React Router DOM is a popular library in the React ecosystem that enables routing in web applications. It allows developers to manage and navigate between different views or pages in a React application while maintaining a single-page application (SPA) architecture. This means the browser doesn't need to reload the entire page when navigating, creating a seamless and dynamic user experience.
  // npm i react-router-dom@6
  // and now using the documentation ek route banao '/' 
  // and then ek folder routes ke nam se and then usme ek folder home ke name se and usme ek file home.jsx usme ye sara code utha ke patak do and use '/' path pe render karao
  // okay see you in next step 5 😁
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return <Directory categories={categories} />;
};

export default App;