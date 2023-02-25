const BtnUp = ()  => {
    const handleScrollTop = () => {
        window.scrollTo({top : 0, behavior: 'smooth'});
    };
    return (
    <>
        <button className="btn-up" onClick={handleScrollTop}>
            <svg width="38" fill="none" viewBox="0 0 58 58">
                <title>Go top page</title>
                <circle cx="29" cy="29" r="29"/>
                <path strokeLinecap="round" strokeWidth="4" d="m17 37 12.82-15L42 37"/>
            </svg>
        </button>
    </>
    )
}
export default BtnUp;