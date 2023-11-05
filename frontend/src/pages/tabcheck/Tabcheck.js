import React, { useEffect, useState } from 'react'
import './Tabs.scss'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Tabcheck() {
    const navigates = useNavigate();



    const stpes = new URLSearchParams(window.location.search);
    const getToken = stpes.get("step");


    console.log(getToken, 'stpes')

    const ChangePath = (datas) => {
        navigates(`/tabs?step=${datas}`)
    }

    const [datas, setDatas] = useState([]);
    const [count, setCount] = useState("");
    const [totalitem, setToatlItem] = useState(0);
    const [totallimit, setToatlLimit] = useState(0);

    const [totaliskip, setToatlSkip] = useState(0);




    console.log(datas, 'datas')


    useEffect(() => {
        axios.get(`https://dummyjson.com/products?limit=10&skip=${totaliskip}`).then((res) => {
            setDatas(res?.data?.products);
            setToatlItem(res?.data?.total)
            setToatlSkip(res?.data?.skip)
            setToatlLimit(res?.data?.limit)
        }).catch((err) => {
            console.log(err);
        })
    }, [totaliskip])

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setToatlSkip(pageNumber)
    }
    return (
        <div>
            <div className='main-sections'>
                <button onClick={() => ChangePath(1)} className={getToken == 1 ? "bg-orange-500" : "bg-slate-400"}>
                    tabs 1
                </button>
                <button onClick={() => ChangePath(2)} className={getToken == 2 ? "bg-orange-500" : "bg-slate-400"}>
                    tabs 2
                </button>
                <button onClick={() => ChangePath(3)} className={getToken == 3 ? "bg-orange-500" : "bg-slate-400"}>
                    tabs 3
                </button>



            </div>
            <div>
                {getToken == 1 && <div>
                    welcome 1
                    {datas?.map((item, index) => index + 1)}
                </div>}

                {getToken == 2 && <div>
                    welcome 2
                </div>}

                {getToken == 3 && <div>
                    welcome 3
                </div>}
            </div>

        </div>
    )
}

export default Tabcheck