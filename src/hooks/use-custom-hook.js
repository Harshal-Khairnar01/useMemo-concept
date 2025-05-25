import { useEffect, useRef } from "react";

const areEqual=(prevDep,currDep)=>{
    if(prevDep===null) return false;
    if(prevDep.length!==currDep.length) return false;
    
    for(let i=0;i<prevDep.length;i++){
        if(prevDep[i]!=currDep[i]) return false;
    }
    return true;
}

const useCustomMemoHook = (cb, deps) => {
    const memoizedRef=useRef(null);

    if(!memoizedRef.current || !areEqual(memoizedRef.current.deps,deps)){
        memoizedRef.current={
            value:cb(),
            deps
        }
    }

    useEffect(()=>{
        return ()=>{
            memoizedRef.current=null;
        }
    },[])

    return memoizedRef.current.value;
};

export default useCustomMemoHook;
