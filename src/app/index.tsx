'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import BlockFalse from "./blockFalse";
import BlockTrue from "./blockTrue";
import BlockElse from "./blockElse";

export default function Body() {
    const searchParams = useSearchParams();
    const id = "9633605648@fam";
    const name = "Sabarinath S";
    const money = searchParams.get("money") || "0";
    const validMoney = isNaN(Number(money)) ? "0" : money;

    return (
        <>
            <script>
                console.log(`
                \n ██╗░░░██╗██████╗░██╗
                \n ██║░░░██║██╔══██╗██║
                \n ██║░░░██║██████╔╝██║
                \n ██║░░░██║██╔═══╝░██║
                \n ╚██████╔╝██║░░░░░██║
                \n ░╚═════╝░╚═╝░░░░░╚═╝ 
                `);
            </script>
            {
                (data.UPI=="" && data.NAME=="") ? (
                    <div>
                        <BlockFalse />
                    </div>
                ) : (data.UPI!="" && data.NAME !="") ? (
                    <div>
                        <BlockTrue />
                    </div>
                ) : (
                    <div>
                        <BlockElse />
                    </div>
                )
            }
        </>

    )
}
