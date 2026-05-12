"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Container } from "./styles"
import { BlurBlob } from "../components/BackgroundBlobs/styles";

export default function Splash() { 
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/login");
        }, 3000);

        return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{ backgroundColor: '#FEFEFE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative', overflow: 'hidden', zIndex: 0 }}>
    <Container>
     <Image
    src="/Logo_02.png"
    alt="Logo do Make It!" 
    width={254}
    height={58}
/>
    </Container>

<BlurBlob $color="#5184F0" $size="500px" $bottom="-30%" $right="-5%" />

<BlurBlob $color="#FFF38A" $size="300px" $bottom="0%" $left="10%" />

<BlurBlob $color="#5184F0" $size="350px" $top="30%" $left="-5%" />

<BlurBlob $color="#F472D0" $size="400px" $bottom="-15%" $left="-10%" />  

<BlurBlob $color="#F472D0" $size="300px" $bottom="5%" $right="-10%" />

    </div>
  );
}

