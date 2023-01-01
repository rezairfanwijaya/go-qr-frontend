import HeroImage from '../assets/image/heroSection.png'

const Hero = () => {
    return (<>
        <div className="hero-section my-10 flex flex-col gap-16 md:flex-row md:items-center">

            <div className="left md:w-1/2"  data-aos="fade-right">
                <div className="title-primary">
                    <p className="font-extrabold text-text-dark text-4xl md:text-5xl md:mb-2 lg:text-6xl xl:text-7xl hover:text-green">GO QRCODE</p>
                </div>

                <div className="title-secondary">
                    <p className="font-medium text-2xl">Keep things<span className='font-semibold text-orange'> sim<span className='text-green'>ple</span></span></p>
                </div>

                <div className="title-description my-4 w-44 lg:w-2/3 lg:my-7">
                    <p className="font-light text-sm text-text-mute">
                        Share with your friends in a simpler and modern way with <span className='font-semibold'>QR-CODE</span>
                    </p>
                </div>

                <a href="#generator-qr">
                    <div className="start shadow-md bg-orange hover:bg-green w-max py-1 px-7 text-white rounded-sm lg:py-2 lg:px-8 xl:py-2 xl:px-10">
                        <p className='lg:text-md xl:text-xl'>Start</p>
                    </div>
                </a>
            </div>

            <div className="right md:w-1/2" data-aos="fade-left">
                <img src={HeroImage} alt="hero image" />
            </div>

        </div>
    </>);
}

export default Hero;