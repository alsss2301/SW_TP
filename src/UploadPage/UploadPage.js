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
                <div className={styles.Itemicon} ><BiCloset size='6x' /></div>
                <div className={styles.itemChangeBtn} onClick={handleClick}><AiOutlinePlusCircle size='4em'/></div>
            </div>
            <button className={styles.registerBtn} onClick={handleRegister}>등록</button>
            <input type={'text'} className={styles.registerTitle} placeholder='글 제목'/>
            <h4 className={styles.contentTitle}>상품 정보</h4>
            <textarea className={styles.registerContent} fixed placeholder='상품 정보...'/>
            <Navbar />
        </div>
    )
}

export default UploadPage;