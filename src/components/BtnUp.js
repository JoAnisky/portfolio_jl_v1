const BtnUp = ()  => {
    const handleScrollTop = () => {
        window.scrollTo({top : 0, behavior: 'smooth'});
    };
    return (
    <>
        <button className="btn-up" onClick={handleScrollTop}>
            <svg width="38" fill="none" viewBox="0 0 60 60">
                <title>Go top page</title>
                <circle cx="30" cy="30" r="30"/>
                <path strokeLinecap="round" strokeWidth="4" d="m17 37 12.82-15L42 37"/>
            </svg>
        </button>
    </>
    )
}
export default BtnUp;