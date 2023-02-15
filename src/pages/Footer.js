import MenuSocials from '../components/MenuSocials';

const Footer = () => {
    return (
        <>
            <footer>
            <MenuSocials/>
                <div>
                    <p>Design & développement &copy; Jonathan Loré (JoAnisky) <span>{(new Date().getFullYear())}</span></p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
