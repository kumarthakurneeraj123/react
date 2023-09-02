const Shimmer = ()=>{
    const arr = [];
    for(let i=0; i<15; i++){
        arr.push(i);
    }
    return(
        <div className="shimmer-container">
            {arr.map((val)=><div key={val} className="shimmer-card"></div>)}
        </div>
    );
};
export default Shimmer;