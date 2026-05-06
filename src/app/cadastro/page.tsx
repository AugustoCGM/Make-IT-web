"use client"
import { useState } from "react";
import Button from "../components/Button/Button"
import Input from "../components/Input/Input"
import { BlurBlob } from "../components/BackgroundBlobs/styles";
import Image from "next/image";
import Link from 'next/link';

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
    const [erros, setErros] = useState({ nome: "", email: "", senha: "", confirmacaoSenha: "" });
    const [carregando, setCarregando] = useState(false);

    const lidarComCadastro = (e: React.FormEvent) => {
        e.preventDefault();

        const novosErros = { nome: "", email: "", senha: "", confirmacaoSenha: "" };
        let formularioValido = true;

        if (nome.length < 3) {
            novosErros.nome = "O nome deve ter pelo menos 3 caracteres.";
            formularioValido = false;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            novosErros.email = "Por favor, insira um email válido.";
            formularioValido = false;
        }

        if (senha.length < 6) {
            novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";
            formularioValido = false;
        }
        
        if (senha !== confirmacaoSenha) {
            novosErros.confirmacaoSenha = "As senhas não coincidem.";
            formularioValido = false;
        }

        setErros(novosErros);

        if (formularioValido) {
            setCarregando(true);

            setTimeout(() => {
                console.log("Dados enviados:", { nome, email, senha });
                alert("Cadastro realizado!");
                
                setNome(""); 
                setEmail(""); 
                setSenha("");
                setConfirmacaoSenha(""); 
                
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
            />
            <h3 style={{ 
                color: '#7C7C7C', 
                fontFamily: "'Quicksand', sans-serif", 
                fontSize: '20px', 
                fontWeight: 500, 
                marginTop: '30px', 
                marginBottom: '10px' 
            }}>
                Crie sua conta
            </h3>
            
            <form onSubmit={lidarComCadastro} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '400px', alignItems: 'center' }}>
                
                <Input type="text" placeholder="Seu nome" value={nome} onChange={(e) => { setNome(e.target.value); setErros(prev => ({ ...prev, nome: "" })); }} temErro={!!erros.nome} />
                {erros.nome && <span style={{ color: 'red', fontSize: '12px', marginTop: '-15px' }}>{erros.nome}</span>}

                <Input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); setErros(prev => ({ ...prev, email: "" })); }} temErro={!!erros.email} />
                {erros.email && <span style={{ color: 'red', fontSize: '12px', marginTop: '-15px' }}>{erros.email}</span>}

                <Input type="password" placeholder="Senha" value={senha} onChange={(e) => { setSenha(e.target.value); setErros(prev => ({ ...prev, senha: "" })); }} temErro={!!erros.senha} />
                {erros.senha && <span style={{ color: 'red', fontSize: '12px', marginTop: '-15px' }}>{erros.senha}</span>}

                <Input 
                    type="password" 
                    placeholder="Confirme sua senha"
                    value={confirmacaoSenha}
                    onChange={(e) => {
                        setConfirmacaoSenha(e.target.value);
                        setErros(prev => ({ ...prev, confirmacaoSenha: "" }));
                    }}
                    temErro={!!erros.confirmacaoSenha}
                />
                {erros.confirmacaoSenha && <span style={{ color: 'red', fontSize: '12px', marginTop: '-15px' }}>{erros.confirmacaoSenha}</span>}

                <Button onClick={() => {}} textoDaProp={carregando ? "Making IT..." : "Make IT!"} disabled={carregando} />

                <p style={{ 
                color: '#7C7C7C', 
                fontFamily: "'Quicksand', sans-serif", 
                fontSize: '12px', 
                fontWeight: 700,
            }}>
                Já possui uma conta? <Link style={{
                    color: '#6762EC',
                    textDecoration: 'underline'
                }} href="/login">Faça login aqui</Link>
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