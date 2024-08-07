// pages/product/[id].js
import { useRouter } from 'next/router';
import Detalles from '@/components/component/Detalles';

const ProductoDetalle = () => {
    const router = useRouter();
    const { id } = router.query;

    // Aquí puedes obtener los detalles del producto utilizando el ID
    // Por ejemplo, si estás obteniendo los detalles de un API o base de datos

    return (
        <div>
            <Detalles productId={id} />
        </div>
    );
};

export default ProductoDetalle;
