
import { getDatabase, ref, child, get } from "firebase/database";

import { useEffect } from "react"
import { useState } from "react"
import Database from "../Database"
import styles from "./styles.module.css"

const DetailPage = ()=>{
    const [data,setData] =useState([])
    const [user,setUser] =useState([])
    const [male,setMale] =useState(0)
    let data1

    const getData = ()=>{
        const dbRef = ref(getDatabase(Database()));
        get(child(dbRef, `data`)).then((snapshot) => {
            if (snapshot.exists()) {
                data1=snapshot.val();
                console.log(data1)
                setData(data1)
                setUser(data1[0])
                console.log(data)
                console.log(user)
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
    useEffect(()=>{
        
        
        getData();
    },[])
    

    

    return(
        <>
        <div>
            <div className={styles.navbar}>
                <h2>SECQUR <span>AI</span>SE</h2>
                <div>
                    <div>25</div>
                    <div>25</div>
                </div>
            </div>
            <div className={styles.parent}>
                <div className={styles.leftdrawer}>left</div>
                <div className={styles.detail}>{user.Name}</div>
                <div className={styles.rightside}>right</div>
            </div>
        </div>
        </>
    )
}
export default DetailPage