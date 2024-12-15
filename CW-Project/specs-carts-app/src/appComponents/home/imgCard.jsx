function ImageCard({url,style,type}){
    return(
        <> 
            <div className="imageCard">
                <img src={url} alt={type} style={style}/>
            </div>
        </>
    )
}

export default ImageCard