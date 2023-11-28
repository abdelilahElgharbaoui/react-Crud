import logo from './logo.svg';
import './App.css';
import { ProductAddForm } from './component/component.product.add';
import { ProductList } from './component/component.product.list';
import {Routes,Route} from 'react-router-dom'
import { AdminLayout } from './component/component.admin.layout';
import { Login } from './component/component.login';
import { Home } from './component/component.home';
import { Detail } from './component/component.details';
import { Profile } from './component/component.profile';
import { ProductEdit } from './component/component.edit';

function App() {
  return (
    <Routes>
      <Route path="/connexion" element={<Login />} />

      <Route path="/" element={<AdminLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/new" element={<ProductAddForm />} />
        <Route path="/Detail/:productId" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/edit/:id" element={<ProductEdit />} />
      </Route>
    </Routes>
  );
}

export default App;
