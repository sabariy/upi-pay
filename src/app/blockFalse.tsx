import React, { useState } from "react";
import data from "../data.json";
import Image from "next/image";
import { Player } from '@lottiefiles/react-lottie-player';

export default function BlockFalse() {
    const [showQR, setShowQR] = useState(false);

    const submit = () => {
        const upiId = "9633605648@fam";
        const name = "Sabarinath S";
        let money = (document.getElementById('money') as HTMLInputElement).value || "0";

        if (isNaN(Number(money))) {
            money = "0";
        }

        data.UPI = upiId;
        data.NAME = name;
        data.MONEY = money;

        setShowQR(true);
    };

    return (
        <>
            {showQR ? (
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center whitespace-break-spaces">
                        <div className="p-4">
                            <div className="qr-container items-center justify-center place-content-center bg1">
                                <p>Scan The QR Code</p>
                                <Image src={`/path-to-qr-image`} alt="QR Code" width={300} height={300} />
                                {data.MONEY !== "0" && <p>Amount: <strong>₹ {data.MONEY}</strong></p>}
                                <div className="text-center">
                                    <button onClick={() => navigator.clipboard.writeText(data.UPI)}>
                                        Copy UPI ID
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap justify-center whitespace-break-spaces">
                        <div className="p-4">
                            <div className="qr-container items-center justify-center place-content-center bg1">
                                <p className="mt-3">Enter Amount:</p>
                                <input type="text" id="money" placeholder="Enter any amount" className="text-xl/2 text-center text-black bg-transparent border-b-2 border-white" />
                                <div className="text-center justify-center items-center">
                                    <button onClick={submit} className="inline-flex items-center justify-center mb-2 mr-2 rounded-lg bg-blue-900 mt-5 text-white p-2">
                                        SUBMIT
                                    </button>
                                </div>
                                <div className="text-center justify-center items-center">
                                    <Player autoplay loop className="bg1 w-10 h-10" src="https://lottie.host/2b51d7af-7099-49f5-93df-f8190dde11bb/WU9eejAueC.json" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
