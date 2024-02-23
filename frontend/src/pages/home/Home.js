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

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import EmojiPicker from 'emoji-picker-react';


function Home() {

  const api = 'http://localhost:9020/base/get';
  const postlike = 'http://localhost:9020/base/update/like';
  const postlikeupdate = 'http://localhost:9020/base/upadted/like/user';

  const CommentUsers = 'http://localhost:9020/base/update';



  const [users, setUsers] = useState([]);

  const [trues, setTrue] = useState(false);
  const [indexs, setIndxes] = useState(null);
  const [userlike, setUserLike] = useState(null);

  console.log(userlike, 'userlike')





  useEffect(() => {
    axios.get(api).then((res) => {
      setUsers(res?.data?.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [trues, userlike]);

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

  const LikeUserPost = (likename, id, userid, likeid) => {


    if (userlike) {
      const data = {
        id: id,
        like: likename,
        likeid: likeid
      }

      console.log(data, 'data')
      axios.put(postlikeupdate, data).then((res) => {
        setIndxes(null);
        setTrue(false);
      }).catch((err) => {
        console.log(err)
      })
    }
    else {
      const data = {
        user: userid,
        id: id,
        like: likename
      }
      axios.put(postlike, data).then((res) => {
        setIndxes(null);
        setTrue(false);
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  const [userid, setUserid] = useState({
    id: "",
    postid: ""
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id, postids) => {
    setShow(true)
    setUserid({
      id: id,
      postid: postids
    })
  };

  const [messages, setMessages] = useState("")

  const [showemoji, setShowemoji] = useState(false);
  const handleEmojiClick = (emoji) => {
    var message = messages + emoji?.emoji;
    setMessages(message)
    setShowemoji(false)
  }


  const sendComments = () => {
    const datas = {
      message: messages,
      user: userid?.id,
      id: userid?.postid
    }
    axios.put(CommentUsers, datas).then((res) => {
      console.log(res)
      handleClose();
      setMessages(null);

    }).catch((err) => {
      console.log(err)
    })
  }

  console.log(users, 'users')
  return (
    <div>
      <div className='container'>
        <div>
          <div className='text-5xl mt-4 mb-4 fw-bold'>
            All Users
          </div>
        </div>
        <div className='row d-flex gap-5'>
          {users?.map((item, index) => {
            const datas = item?.postlike?.find((itemss, index) => itemss?.user == item?.user?._id);
            return (
              <div className='card col-lg-3 mb-3 mt-4'
                onMouseLeave={() => {
                  setTrue(false)
                  setIndxes(null)
                }}
              >
                {item?.name}

                <div className='main-like'>
                  <div className='main-box-like-shadow'>
                    {index === indexs ? <div className='mt-3 mb-3 d-flex'>
                      {likes?.map((items) => <div className='like-lists' onClick={() => LikeUserPost(items?.likename, item?._id, item?.user, datas?._id)}>
                        {items?.name}
                      </div>)}
                    </div> : <></>}
                  </div>
                  <div className='mb-3 mt-2 fw-bold text-red-400'>
                    {datas?.like} <span className='text-blue-500'>{item?.postlike?.length}</span>
                  </div>
                  <div className='like-box' onMouseOver={(e) => {
                    handleChange(index)
                    setUserLike(datas?.like);

                  }

                  }

                  >
                    {index === indexs ? <>
                    </> : <>
                      <button>Like</button>
                    </>}
                  </div>
                  <div className='mt-3 mb-4' onClick={() => handleShow(item?.user, item?._id)}>
                    Comments <span className='text-blue-600 fw-bold'>{item?.postusers?.length}</span>
                  </div>
                </div>

              </div>
            )
          })}

          {users?.length === 0 ? <div className='mt-4'>No Users</div> : null}
        </div>
      </div>

      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='d-flex gap-3 align-items-center'>
              <div>
                {showemoji ? <>

                  <EmojiPicker className='box-emojies' onEmojiClick={handleEmojiClick} />

                </> : <>
                  <div onClick={() => setShowemoji(true)} className='text-orange-600 fw-bold capitalize text-space-2xl cursor-pointer'>emojies</div>
                </>}
              </div>
              <div className='w-100'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Message</Form.Label>
                  <Form.Control type="text" placeholder="Enter message"
                    value={messages} onChange={(e) => setMessages(e?.target?.value)} />
                </Form.Group>
              </div>
            </div>
            <div>
              <button className='bg-red-500 w-20 p-2 border rounded outline-none cursor-pointer text-white capitalize fw-bold
              xs:text-blue-600
              '
                onClick={sendComments}
              >send</button>
            </div>
          </Modal.Body>

        </Modal>
      </div>

    </div>
  )
}

export default Home