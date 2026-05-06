"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Container } from "./styles"

export default function Splash() { 
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/login");
        }, 3000);

        return () => clearTimeout(timer);
  }, [router]);

  return (
    <Container>
     <Image
    src="/Logo_02.png"
    alt="Logo do Make It!" 
    width={254}
    height={58}
/>
    </Container>
  );
}

