"use client"
import { useState } from "react";
import Button from "../components/Button/Button"
import Input from "../components/Input/Input"
import { BlurBlob } from "../components/BackgroundBlobs/styles";
import Image from "next/image";
import Link from 'next/link';
import SocialButton from "../components/SocialButton/SocialButton";

export default function login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erros, setErros] = useState({ email: "", senha: "" });
    const [carregando, setCarregando] = useState(false);

    const lidarComLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const novosErros = { email: "", senha: "" };
        let formularioValido = true;

        
        if (!/\S+@\S+\.\S+/.test(email)) {
            novosErros.email = "Por favor, insira um email válido.";
            formularioValido = false;
        }

        if (senha.length < 6) {
            novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";
            formularioValido = false;
        }
        

        setErros(novosErros);

        if (formularioValido) {
            setCarregando(true);

            setTimeout(() => {
                console.log("Dados enviados:", { email, senha });
                alert("Login realizado!");
                
                setEmail(""); 
                setSenha("");

                
                setCarregando(false);
            }, 2000);
        }
    }

    return (
        <div style={{ backgroundColor: '#FEFEFE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', position: 'relative', overflow: 'hidden', zIndex: 0 }}>
            <Image 
                src="/logo_02.png" 
                alt="Logo do Make it!" 
                width={254} 
                height={58} 
                priority
                style={{ marginBottom: '30px' }}
            />
            
            <form onSubmit={lidarComLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '400px', alignItems: 'center' }}>
                

                <Input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); setErros(prev => ({ ...prev, email: "" })); }} temErro={!!erros.email} />
                {erros.email && <span style={{ color: 'red', fontSize: '12px', marginTop: '-15px' }}>{erros.email}</span>}

                <Input type="password" placeholder="Senha" value={senha} onChange={(e) => { setSenha(e.target.value); setErros(prev => ({ ...prev, senha: "" })); }} temErro={!!erros.senha} />
                {erros.senha && <span style={{ color: 'red', fontSize: '12px', marginTop: '-15px' }}>{erros.senha}</span>}

                <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                    <SocialButton iconeSrc="/google_icon.svg" altTexto="Entrar com Google" onClick={() => alert("Login com Google não implementado")} />
                    <SocialButton iconeSrc="/apple_icon.svg" altTexto="Entrar com Apple" onClick={() => alert("Login com Apple não implementado")} />
                    <SocialButton iconeSrc="/x_icon.svg" altTexto="Entrar com X" onClick={() => alert("Login com X não implementado")} />
                    <SocialButton iconeSrc="/meta_icon.svg" altTexto="Entrar com meta" onClick={() => alert("Login com meta não implementado")} />
                </div>


                <Button onClick={() => {}} textoDaProp={carregando ? "Entrando..." : "Entrar"} disabled={carregando} />

                <p style={{ 
                color: '#7C7C7C', 
                fontFamily: "'Quicksand', sans-serif", 
                fontSize: '12px', 
                fontWeight: 700,
            }}>
                Não possui uma conta? <Link style={{
                    color: '#6762EC',
                    textDecoration: 'underline'
                }} href="/cadastro">Cadastre-se!</Link>
            </p>
        </form>

           
<BlurBlob $color="#5184F0" $size="500px" $bottom="-30%" $right="-5%" />

<BlurBlob $color="#FFF38A" $size="300px" $bottom="0%" $left="10%" />

<BlurBlob $color="#5184F0" $size="350px" $top="30%" $left="-5%" />

<BlurBlob $color="#F472D0" $size="400px" $bottom="-15%" $left="-10%" />  

<BlurBlob $color="#F472D0" $size="300px" $bottom="5%" $right="-10%" />
        </div>
    )
}