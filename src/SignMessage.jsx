import bs58 from "bs58";
import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";


export function SignMessage(){
    const { publicKey,  signMessage} = useWallet()
    async function onClick(){
        if(!publicKey) throw new Error("wallet not connected")
        if(!signMessage) throw new Error("Wallet doesn't support message signing")
        
        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);
        if(!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error("Message signature is invalid")
        alert("success")
        console.log( `Message signature: ${bs58.encode(signature)}`);
    }
    return <div>
        <input type="text" id="message" placeholder="Message" />
        <button onClick={onClick}>Sign message</button>
    </div>
}