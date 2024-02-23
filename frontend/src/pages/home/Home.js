// import React, { useEffect, useState } from 'react'
// import './styles/Home.scss';
// import Header from './Header';
// import ProductCards from './ProductCards';
// import BanneerSection from './BanneerSection';
// import { toast } from 'react-toastify';
// function Home() {
//   const datas = Array(10).fill("kalai");

//   const [locations, setLocations] = useState([]);


//   function showPosition(position) {
//     setLocations(position?.coords);
//   }

//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//       toast.error("Geolocation is not supported by this browser.")
//     }
//   }

//   useEffect(() => {
//     getLocation()
//   }, [])

//   useEffect(() => {
//     const userid = Math.floor(Math.random() * 8976989);
//     const RandomUserid = `${userid}USERIDRANDOM`;

//     if (localStorage.getItem("unknowuser")) {
//     }
//     else {
//       localStorage.setItem("unknowuser", RandomUserid)
//     }
//   }, [])
//   return (
//     <div className='main-home-section'>
//       <BanneerSection />
//     </div>
//   )
// }

// export default Home


import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import './styles/Home.scss';

function Home() {

  const api = 'http://localhost:9020/base/get';
  const postlike = 'http://localhost:9020/base/update/like';


  const [users, setUsers] = useState([]);

  const [trues, setTrue] = useState(false);
  const [indexs, setIndxes] = useState(null);




  useEffect(() => {
    axios.get(api).then((res) => {
      setUsers(res?.data?.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [trues]);

  const likes = [
    {
      id: 1,
      name: "👍",
      likename: "👍like",
    }, {
      id: 2,
      name: "❤️",
      likename: "❤️heart",
    },
    {
      id: 3,
      name: "🥰",
      likename: "🥰love",
    },
    {
      id: 4,
      name: "😆",
      likename: "😆smile",
    },
    {
      id: 5,
      name: "😃",
      likename: '😃happy'
    },
    {
      id: 6,
      name: "🥲",
      likename: '🥲sad'
    },
    {
      id: 7,
      name: "😡",
      likename: '😡angry'
    }
  ]

  const handleChange = (e) => {
    setIndxes(e);
    setTrue(true);
  }

  const LikeUserPost = (likename, id) => {
    console.log(id, likename)

    const data = {
      user: id,
      like: likename
    }
    axios.put(postlike, data).then((res) => {
      setIndxes(null);
      setTrue(false);
    }).catch((err) => {
      console.log(err)
    })
  }
  return (
    <div>

      <div className='container'>
        <div className='row d-flex gap-5'>
          {users?.map((item, index) => {
            return (
              <div className='card col-lg-3 mb-3 mt-4'>
                {item?.name}

                <div className='main-like'>
                  <div>
                    {index === indexs ? <div className='mt-3 mb-3 d-flex'>
                      {likes?.map((items) => <div className='like-lists' onClick={() => LikeUserPost(items?.likename, item?._id)}>
                        {items?.name}
                      </div>)}
                    </div> : <></>}
                  </div>
                  <div>
                    {/* {item?.postlike?.find((itemss, index) => itemss?.user==)}; */}
                  </div>
                  <div className='like-box' onMouseOver={(e) => handleChange(index)} >
                    {index === indexs ? <>
                    </> : <>
                      <button>Like</button>
                    </>}
                  </div>
                </div>
              </div>
            )
          })}

          {users?.length === 0 ? <div className='mt-4'>No Users</div> : null}
        </div>
      </div>

    </div>
  )
}

export default Home