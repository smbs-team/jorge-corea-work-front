import React from 'react';

const Home = React.lazy(() => import('./ui/pages/Home'));
const Product = React.lazy(() => import('./ui/pages/Product'));
const Products = React.lazy(() => import('./ui/pages/Products'));
const Weddings = React.lazy(() => import('./ui/pages/Weddings'));
const Styles = React.lazy(() => import('./ui/pages/Styles'));
const Blog = React.lazy(() => import('./ui/pages/Blog'));
const Shop = React.lazy(() => import('./ui/pages/Shop'));
const Staff = React.lazy(() => import('./ui/pages/Staff'));
const Sponsors = React.lazy(() => import('./ui/pages/Sponsors'));
const Reviews = React.lazy(() => import('./ui/pages/Reviews'));
const Press = React.lazy(() => import('./ui/pages/Press'));
const JoinUs = React.lazy(() => import('./ui/pages/JoinUs'));
const FAQ = React.lazy(() => import('./ui/pages/FAQ'));
const WishList = React.lazy(() => import('./ui/pages/WishList'));
const SignIn = React.lazy(() => import('./ui/pages/SignIn'));
const Contact = React.lazy(() => import('./ui/pages/Contact'));
const Reserve = React.lazy(() => import('./ui/pages/Reserve'));
const ProfessionalList = React.lazy(() => import('./ui/pages/Reserve/Professional'));

const routes = [
  { path: '/', exact: true, name: 'Home', component: Home },
  { path: '/products', exact: true,  name: 'Products', component: Products },
  { path: '/product/:id', exact: true,  name: 'Product', component: Product },
  { path: '/weedings', exact: true,  name: 'Weddings', component: Weddings },
  { path: '/styles', exact: true,  name: 'Styles', component: Styles },
  { path: '/blog', exact: true,  name: 'Blog', component: Blog },
  { path: '/shop', exact: true,  name: 'Shop', component: Shop },
  { path: '/staff', exact: true,  name: 'Staff', component: Staff },
  { path: '/sponsors', exact: true,  name: 'Sponsors', component: Sponsors },
  { path: '/reviews', exact: true,  name: 'Reviews', component: Reviews },
  { path: '/press', exact: true,  name: 'Press', component: Press },
  { path: '/join-us', exact: true,  name: 'JoinUs', component: JoinUs },
  { path: '/faq', exact: true,  name: 'FAQ', component: FAQ },
  { path: '/wishlist', exact: true,  name: 'FAQ', component: WishList },
  { path: '/login', exact: true,  name: 'SignIn', component: SignIn },
  { path: '/contact', exact: true,  name: 'Contact', component: Contact },
  { path: '/reserve', exact: true,  name: 'Reserve', component: Reserve },
  { path: '/reserve/professional', exact: true,  name: 'Reserve', component: ProfessionalList },
  
];

export default routes;
