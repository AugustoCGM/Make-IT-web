import Image from "next/image";
import { CircleButton } from "./styles";

interface SocialButtonProps {
  iconeSrc: string;  
  altTexto: string;   
  onClick: () => void;
}

export default function SocialButton({ iconeSrc, altTexto, onClick }: SocialButtonProps) {
  return (

    <CircleButton type="button" onClick={onClick}>
      <Image src={iconeSrc} alt={altTexto} width={24} height={24} />
    </CircleButton>
  );
}