import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function ProductCards({ product, index }) {

    const navigate = useNavigate();

    const ProductView = (data) => {
        navigate(`/productview/${data}`)
    }
    return (
        <div className='mt-4 mb-4'>
            <Card style={{ width: '17rem', height: "400px", cursor: "pointer" }} onClick={() => ProductView(index+1)}>
                <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <Card.Body>
                    <Card.Title>
                        {product.name?.length > 20 ? <>{product?.name.slice(0, 40)}...</> : <>{product?.name}</>}
                    </Card.Title>

                    <Card.Text>
                        <div className='mb-2'>
                            <div className="mt-1 text-sm text-gray-500">{product.color}</div>
                        </div>
                        <div className="text-sm fs-5 fw-bold text-gray-900">{product.price}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>



    )
}

export default ProductCards





