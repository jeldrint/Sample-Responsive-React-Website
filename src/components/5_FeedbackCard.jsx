

const FeedbackCard = ({name, slogan, msg, pic}) => {

    return(
        <div className="text-[12.8px] max-w-[315px] max-h-[420px] bg-white">
            <img src={pic} className="w-[200px] h-[200px] object-contain clip-path-sm-pic hover:grayscale inline-block" alt='customer picture'/>
            <span className="font-bold text-clip">{slogan.toUpperCase()}</span>
            <span className="text-clip">{msg}</span>
        </div>
    )
}

export default FeedbackCard;