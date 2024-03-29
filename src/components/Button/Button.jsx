import "./button.css"

export default ({type, handleClick}) => {
    return <button className="Button" onClick={() => handleClick(type.name)}>
        {type.name}
        



        {/* TEST BUTTON */}
        {/* type.map((type) => {
                return <button onClick={(() => {
                    handleClick(type.name);
                })}>{type.name}</button>
            })} */}

    </button>
}