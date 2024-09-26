

const FeedbackCard = ({name, slogan, msg, pic}) => {

    return(
        <div className="max-w-[400px] min-h-[315px] px-11 py-2 bg-white clip-path-feedback">
            <div className="w-[200px] h-[200px] flex items-center justify-center duration-300 hover:scale-95 bg-contain bg-center hover:bg-[#333333] text-transparent hover:text-[#F7F7F7] bg-blend-overlay float-left shape-outside clip-path-sm-pic" style={{backgroundImage: `url(${pic})`}}>
                <span className="text-wrap p-11 text-center">{name.toUpperCase()}</span>
            </div>
            <br /><br />
            <span className="font-bold break-words">{slogan.toUpperCase()}</span>
            <br /><br />
            <span className="text-justify break-words">{msg}</span>
        </div>
    )
}

export default FeedbackCard;