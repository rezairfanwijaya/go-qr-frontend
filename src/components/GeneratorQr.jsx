import { useState } from "react";

const GeneratorQr = () => {
    // set state
    const [inputUser, setinputUser] = useState('')
    const [qr, setqr] = useState('')
    const [isCreated, setisCreated] = useState(false)

    // endpoint to hit
    const URL = "http://localhost:8989/generate"

    // body request 
    const bodyRequest = {
        input: inputUser
    }


    // hit endpoint
    if (inputUser != '') {
        fetch(URL, {
            method: 'POST',
            body: JSON.stringify(bodyRequest)
        })
            .then((res) => res.json())
            .then((data) => {
                // set qr
                setqr(data.data)
                // show qr
                setisCreated(true)
            })
    }

    return (<>
        <section id="generator-qr">
            <div className="generator-qr flex flex-col md:flex-row my-5 gap-5">

                <div className="left bg-white rounded-md shadow-sm md:w-1/2" data-aos="fade-right">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Type anything here"
                        className="h-56 xl:h-80 p-3 w-full text-text-mute text-center"
                        onChange={(e) => setinputUser(e.target.value)}
                    />

                </div>

                <div className="right bg-white rounded-md shadow-sm h-56 xl:h-80 p-3 w-full flex justify-center items-center  md:w-1/2" data-aos="fade-left">
                    {
                        !isCreated
                        &&
                        <p className="text-text-mute">QR code wil be here by automatically</p>
                    }

                    {
                        isCreated
                        &&
                        <img src={`data:image/jpeg;base64,${qr}`} alt="" className="w-52 xl:w-72" />
                    }
                </div>

            </div>
        </section>
    </>);
}

export default GeneratorQr;