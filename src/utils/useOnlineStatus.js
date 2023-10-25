import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [status, setStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",(e)=>{
            setStatus(false);
            console.log("Connection failed");
        });
        window.addEventListener("online", (e)=>{ 
                       setStatus(true);
            console.log("Connection established");
        }
        );
    }, []);
    return status;
};

export default useOnlineStatus;