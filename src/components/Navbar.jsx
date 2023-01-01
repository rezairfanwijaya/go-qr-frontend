import logo from '../assets/image/logo.png'

const Navbar = () => {
    return (<>
        <div className="navbar flex justify-between py-2" data-aos="fade-down">

            <div className="left">
                <a href="/">
                    <img src={logo} alt="logo" className='w-8 lg:w-7' />
                </a>
            </div>

            <div className="right">
                <a
                    href="https://github.com/rezairfanwijaya/go-qr-frontend"
                    target={'_blank'}
                    rel="noreferrer"
                >
                    <div className="icon text-4xl lg:text-3xl">
                        <ion-icon name="logo-github"></ion-icon>
                    </div>
                </a>
            </div>

        </div>

    </>);
}

export default Navbar;