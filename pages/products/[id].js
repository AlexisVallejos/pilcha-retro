// pages/products/[id].js
import { useRouter } from 'next/router';
import ProductDetail from '@/components/ProductDetail';
import products from '@/data/products'; // Asumiendo que tienes un archivo con los datos de los productos

const ProductPage = ({ addToCart }) => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id));

  return <ProductDetail product={product} addToCart={addToCart} />;
};

export default ProductPage;
