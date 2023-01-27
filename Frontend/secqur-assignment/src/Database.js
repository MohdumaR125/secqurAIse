import { initializeApp } from "firebase/app";

const Database = ()=>{

    const firebaseConfig = {
        apiKey: "AIzaSyAF-dQB1Omh6xxKscayzrzG7zzcwpJR4JY",
        authDomain: "secquraise-87826.firebaseapp.com",
        databaseURL: "https://secquraise-87826-default-rtdb.firebaseio.com/",
        projectId: "secquraise-87826",
        storageBucket: "secquraise-87826.appspot.com",
        messagingSenderId: "559343105894",
        appId: "1:559343105894:web:ca0627ba28caf17d417aa7",
        measurementId: "G-JV1J5HFVXJ"
      };

      const app = initializeApp(firebaseConfig);

      return app
}

export default Database