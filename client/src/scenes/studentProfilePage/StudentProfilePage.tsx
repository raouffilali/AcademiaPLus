import {useEffect, useState} from "react";
import { Footer, NavBar } from "../../components";
import YouTubeFrame from "../../components/YoutubeFrame/YoutubeFRame";
import PersonalinfoSec from "../../components/PersonalinfoSec/PersonalinfoSec";
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
// import {isLength, isMatch} from './src/utils/validation/Validation'
// import {showSuccessMsg, showErrMsg} from '../../utils/notification/Notification'
// import {fetchAllUsers, dispatchGetAllUsers} from '../../../redux/actions/usersAction'
const initialState = {
    name: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}
function StudentProfilePage() {
  // const auth = useSelector(state => state.auth)
  // const token = useSelector(state => state.token)

  // const users = useSelector(state => state.users)

  // const {user, isAdmin} = auth
  // const [data, setData] = useState(initialState)
  // const {name, password, cf_password, err, success} = data

  // const [avatar, setAvatar] = useState(false)
  // const [loading, setLoading] = useState(false)
  // const [callback, setCallback] = useState(false)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //     if(isAdmin){
  //         fetchAllUsers(token).then(res =>{
  //             dispatch(dispatchGetAllUsers(res))
  //         })
  //     }
  // },[token, isAdmin, dispatch, callback])

  // const handleChange = e => {
  //     const {name, value} = e.target
  //     setData({...data, [name]:value, err:'', success: ''})
  // }

  // const changeAvatar = async(e) => {
  //     e.preventDefault()
  //     try {
  //         const file = e.target.files[0]

  //         if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

  //         if(file.size > 1024 * 1024)
  //             return setData({...data, err: "Size too large." , success: ''})

  //         if(file.type !== 'image/jpeg' && file.type !== 'image/png')
  //             return setData({...data, err: "File format is incorrect." , success: ''})

  //         let formData =  new FormData()
  //         formData.append('file', file)

  //         setLoading(true)
  //         const res = await axios.post('/api/upload_avatar', formData, {
  //             headers: {'content-type': 'multipart/form-data', Authorization: token}
  //         })

  //         setLoading(false)
  //         setAvatar(res.data.url)
          
  //     } catch (err) {
  //         setData({...data, err: err.response.data.msg , success: ''})
  //     }
  // }

  // const updateInfor = () => {
  //     try {
  //         axios.patch('/user/update', {
  //             name: name ? name : user.name,
  //             avatar: avatar ? avatar : user.avatar
  //         },{
  //             headers: {Authorization: token}
  //         })

  //         setData({...data, err: '' , success: "Updated Success!"})
  //     } catch (err) {
  //         setData({...data, err: err.response.data.msg , success: ''})
  //     }
  // }

  // const updatePassword = () => {
  //     if(isLength(password))
  //         return setData({...data, err: "Password must be at least 6 characters.", success: ''})

  //     if(!isMatch(password, cf_password))
  //         return setData({...data, err: "Password did not match.", success: ''})

  //     try {
  //         axios.post('/user/reset', {password},{
  //             headers: {Authorization: token}
  //         })

  //         setData({...data, err: '' , success: "Updated Success!"})
  //     } catch (err) {
  //         setData({...data, err: err.response.data.msg , success: ''})
  //     }
  // }

  // const handleUpdate = () => {
  //     if(name || avatar) updateInfor()
  //     if(password) updatePassword()
  // }

  // const handleDelete = async (id) => {
  //     try {
  //         if(user._id !== id){
  //             if(window.confirm("Are you sure you want to delete this account?")){
  //                 setLoading(true)
  //                 await axios.delete(`/user/delete/${id}`, {
  //                     headers: {Authorization: token}
  //                 })
  //                 setLoading(false)
  //                 setCallback(!callback)
  //             }
  //         }
          
  //     } catch (err) {
  //         setData({...data, err: err.response.data.msg , success: ''})
  //     }
  // }
  return (
    <>

      <NavBar />
      <div className="container mx-auto mt-3 ">
      <YouTubeFrame />
        <div className="grid grid-row-1 sm:grid-row-2 md:grid-row-3 lg:grid-row-4 gap-6 mb-36">
          <h1 className="text-3xl font-bold ">Personal Information</h1>
          <PersonalinfoSec title="Username" detail="Abderraouf FILALI" />
          <PersonalinfoSec title="Email Address" detail="abderaouffilali@yahoo.com" />
          <PersonalinfoSec title="Phone Number" detail="0799623541" />
          <PersonalinfoSec title="Date of birth" detail="2-9-1999" />
          <PersonalinfoSec title="Gender" detail="Abderraouf FILALI" />
          <PersonalinfoSec title="Password" detail="********" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default StudentProfilePage;


