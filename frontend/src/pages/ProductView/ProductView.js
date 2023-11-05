
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import { products } from '../../commonproducts/CommonProducts'

import {
    EmailShareButton,
    FacebookShareButton,
    FacebookIcon,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    WhatsappIcon,
    TelegramIcon
} from "react-share";

import Dropdown from 'react-bootstrap/Dropdown';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductView() {



    const { id } = useParams();





    const [productss, setProducts] = useState({});

    const [selectcolor, setSelectColor] = useState(0);



    console.log(productss, 'productss')


    useEffect(() => {
        const filterss = products?.map((item, index) => {
            if (index + 1 == id) {
                setProducts(item);
            }
        })
    }, [selectcolor])



    const [filters, setFilters] = useState([]);

    useEffect(() => {
        productss?.imageCard?.map((items, index) => {
            if (index == selectcolor) {
                setFilters(items?.images)
            }
        });

    }, [selectcolor, filters, productss])



    return (
        <div className="bg-white">
            <div className="pt-1">


                {/* Image gallery */}
                <div className="mx-auto  max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">







                    {filters?.map((item, index) => {
                        return (

                            <div className={index == 0 ? "aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block mt-4" : "aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg mt-4"}>
                                <img
                                    src={item}
                                    alt={`no Image ${index + 1}`}
                                    className="h-full w-full object-cover object-center cursor-pointer"
                                />
                            </div>
                        )


                    })}
                    {/* <img
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            className="h-full w-full object-cover object-center"
                        /> */}
                </div>
                {/* <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={product.images[1].src}
                                alt={product.images[1].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={product.images[2].src}
                                alt={product.images[2].alt}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={product.images[3].src}
                            alt={product.images[3].alt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div> */}




                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{productss.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">


                        <div className='mb-4 d-flex justify-end'>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Share
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <div className='d-flex gap-4'>
                                            <FacebookShareButton url={"www.facebook.com"} >
                                                <FacebookIcon size={32} round={true} />
                                            </FacebookShareButton>
                                            <WhatsappShareButton url={"www.facebook.com"} >
                                                <WhatsappIcon size={32} round={true} />
                                            </WhatsappShareButton>
                                            <TelegramShareButton url={"www.facebook.com"} >
                                                <TelegramIcon size={32} round={true} />
                                            </TelegramShareButton>
                                        </div>

                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>



                        <h2 className="fw-bold mb-4">Product information : </h2>
                        <p className="text-3xl tracking-tight text-gray-900">{productss.price}</p>

                        {/* colors */}
                        <div className='row d-flex gap-3'>
                            <div className='mt-3 mb-1 fw-bold fs-4'>
                                Colors :
                            </div>
                            {productss?.imageCard?.map((item, index) => {
                                return (
                                    <div className='card col-lg-2 rounded hover:opacity-30 ms-3' style={{
                                        backgroundColor: item?.color,
                                        width: "30px",
                                        height: "30px",
                                        borderRadius: "50%",
                                        cursor: "pointer"
                                    }}
                                        onClick={() => {
                                            setSelectColor(index)
                                        }}
                                    >

                                    </div>
                                )
                            })}
                        </div>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}

                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <div className="fw-bold opacity-50">{productss?.imageCard?.length*3} out of 5 stars</div>
                                <div  className="ml-3 text-sm font-bold text-indigo-600 hover:text-indigo-500">
                                    {productss?.imageCard?.length*100} reviews
                                </div>
                            </div>
                        </div>

                        <form className="mt-10">
                            {/* Colors */}

                            {productss?.imageCard?.map((item, index) => {
                                return (
                                    <div styles={{
                                        backgroundColor: item?.name,
                                        width: "40px",
                                        height: "40px"
                                    }} key={index}>

                                        {item?.name}
                                    </div>
                                )
                            })}


                            {/* Sizes */}

                            <div className='row d-flex gap-3'>
                                {productss?.size?.map((item, index) => {
                                    return (
                                        <div className='card col-lg-2 text-center p-1 cursor-pointer'>

                                            {item}
                                        </div>
                                    )
                                })}
                            </div>


                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Add to Cart
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="fw-bold fs-4 mt-3 mb-4">Description : </h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{productss.description}</p>
                            </div>
                        </div>



                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Details</h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{productss.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
