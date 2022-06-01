import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { FaSearch, FaChevronLeft } from "react-icons/fa";
import FileUpload from '../Utils/FileUpload';
import styles from "./UploadPage.module.css";
import Navbar from '../Navbar/Navbar';
import { BiCloset } from 'react-icons/bi'
import { AiOutlinePlusCircle } from 'react-icons/ai'

function UploadPage() 
{
    const [Title, setTitle] = useState("")
    const [Body, setBody] = useState("")
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const handleRegister = () => {
        alert('clicked!');
    }

    const handleClick = () => {
        alert('Clicked!')
    }

    return (
        <div>
            <div className={styles.Mainbox}>
                <Link to={'/Center'} /* 이전 페이지로 이동 구현 필요*/>
                    <div className={styles.backIcon}><FaChevronLeft /></div>
                </Link>
                <h2 className={styles.Title}>공유하기</h2>
            </div>
            <div className={styles.Itembox}>
                <div className={styles.Itemicon} ><BiCloset size='300' /></div>
                <div className={styles.itemChangeBtn} onClick={handleClick}><AiOutlinePlusCircle size='4em'/></div>
            </div>
            <Link to={'/Main'}>
                <div className={styles.Backicon}><FaChevronLeft /></div>
            </Link>
            <Link to={'/Refer'}>
                <div className={styles.Searchicon}><FaSearch /></div>
            </Link>
            <br/>
            <button className={styles.registerBtn}>등록</button>
            <form>
                <div className={styles.drop}><FileUpload refreshFunction={updateImages} /></div>
                <br />
                <input className={styles.registerTitle} placeholder="글 제목.." value={Title}/> 
                <br />
                <br />
                <textarea className={styles.registerContent} style={{width: 300, height: 250 }}>상세정보..</textarea>
            </form>
            <Navbar />
        </div>
    )
}

export default UploadPage;