'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import upiqrcode from "upiqrcode"; 
import { Player } from '@lottiefiles/react-lottie-player';

export default function BlockTrue() {
    const [qrCode, setQrCode] = useState("");
    const searchParams = useSearchParams();
    const id = "9633605648@fam";
    const name = "Sabarinath S";
    const money = searchParams.get("money") || "0"; 

    useEffect(() => {
        const generateQRCode = async () => {
            try {
                const upi = await upiqrcode({
                    payeeVPA: id,
                    payeeName: name,
                    amount: money !== "0" ? money : "", 
                    transactionNote: "Payment for service",
                });
                setQrCode(upi.qr); 
            } catch (error) {
                console.error("Error generating QR code:", error);
            }
        };

        generateQRCode(); 
    }, [money]); 

    const copy = () => {
        navigator.clipboard.writeText(id).then(async () => {
            const copyId = document.getElementById('copy-id');
            if (copyId) {
                copyId.innerHTML = "Copied !!!";
                await new Promise(r => setTimeout(r, 2000));
                copyId.innerHTML = "Copy";
            }
        });
    };

    return (
        <>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap justify-center whitespace-break-spaces">
                    <div className="p-4">
                        <div className="qr-container items-center justify-center place-content-center bg1">
                            <div className="border border-zinc-950">
                                {/* Only display the QR code when qrCode is available */}
                                {qrCode && (
                                    <Image
                                        src={qrCode}
                                        alt="QR Code"
                                        width={300}
                                        height={300}
                                    />
                                )}
                            </div>
                            <div className="text-center justify-center place-content-center items-center mt-5 text-xl/2">
                                <p>Scan The QR Code To Pay</p>
                                {money !== "0" && <p>Amount: <strong>₹ {money}</strong> </p>}
                                <div className="upi-id-content">
                                    <div className="text-red-700 text-xl">
                                        <strong>{id}</strong>
                                    </div>
                                    <div className="justify-center items-center mb-5 mt-5">
                                        <div className="text-center items-center justify-center backdrop-blur-30 text-white">
                                            <button onClick={copy} className="inline-flex items-center justify-center mb-2 mr-2 rounded-lg bg-blue-500">
                                                <span className="relative px-5 py-2.5" id='copy-id'>Copy</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-center justify-center items-center">
                                        <Player
                                            autoplay
                                            loop
                                            className="bg1 w-10 h-10"
                                            src="https://lottie.host/2b51d7af-7099-49f5-93df-f8190dde11bb/WU9eejAueC.json">
                                        </Player>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
