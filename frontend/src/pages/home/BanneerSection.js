import React from 'react'
import './styles/Home.scss';
import AliceCarousel from 'react-alice-carousel';
import ProductCards from './ProductCards';
import { products } from '../../commonproducts/CommonProducts';

function BanneerSection() {


    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };





    const items = products?.map((item, index) => <ProductCards product={item} index={index} />)




    return (
        <>
            <div className='mt-3 mb-3 ms-3'>
                <h4 className='font-bold'>New Collections for Men</h4>
            </div>
            <div className='banner-images ms-4'>

                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    autoPlay
                    disableButtonsControls
                    mouseTracking
                    autoPlayInterval={1000}
                    animationDuration={1000}
                    animationType="fadeout"
                    infinite
                    touchTracking={false}
                    disableDotsControls
                />
            </div>


            {/* <div className='mt-3 mb-3 ms-3'>
                <h4 className='font-bold'>T-shirts for Men</h4>
            </div>
            <div className='banner-images'>

                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    autoPlay
                    disableButtonsControls
                    mouseTracking
                    autoPlayInterval={2000}
                    animationDuration={1000}
                    animationType="fadeout"
                    infinite
                    touchTracking={false}
                    disableDotsControls
                />
            </div>


            <div className='mt-3 mb-3 ms-3'>
                <h4 className='font-bold'>Jeans for Men</h4>
            </div>
            <div className='banner-images'>

                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    autoPlay
                    disableButtonsControls
                    mouseTracking
                    autoPlayInterval={1500}
                    animationDuration={1000}
                    animationType="fadeout"
                    infinite
                    touchTracking={false}
                    disableDotsControls
                />
            </div> */}
        </>
    )
}

export default BanneerSection




