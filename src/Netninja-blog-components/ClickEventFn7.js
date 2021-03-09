//sfc

const Home5 = () => {

    const handleClick = (e) => console.log("hi vasanth", e.target)

    const handleClickAgain = (name, e) => {
        console.log("hi" + name, e.target);
    }



    return (
        <div className="Home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain("vasi", e)}>Click me Again</button>
        </div>
    );
}

export default Home5;