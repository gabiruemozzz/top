import { useState } from 'react';
import App from './App.tsx';
import ProductPage from './ProductPage.tsx';

export default function Router() {
  const [page, setPage] = useState<'advertorial' | 'product'>('advertorial');
  const goToProduct = () => { setPage('product'); window.scrollTo(0, 0); };
  const goToAdvertorial = () => { setPage('advertorial'); window.scrollTo(0, 0); };
  if (page === 'product') return <ProductPage onNavigateToAdvertorial={goToAdvertorial} />;
  return <App onNavigate={goToProduct} />;
}
