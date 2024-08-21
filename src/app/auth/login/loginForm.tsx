"use client";
import AspectRatio from "@/components/AspectRatio";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export default function LoginForm(): ReactNode {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const actionHandler = (e: any) => {
    e.preventDefault();
    router.push("/admin");
  };

  if (!visible) return;

  return (
    <form className="pt-40 flex flex-col gap-2 pb-2" onSubmit={actionHandler}>
      <div className="flex flex-col gap-2 items-center">
        <AspectRatio src="/logo.svg" size={{ height: 36 }} />
        <h2 className="text-2xl text-neutral-800 mt-4">
          Bem vindo(a) de volta!
        </h2>
        <small className="text-sm text-neutral-400 font-light">
          Por favor insira seus detalhes de login abaixo.
        </small>
      </div>
      <div className="input-group mt-10">
        <label>Email</label>
        <input type="email" placeholder="Insira seu email" />
      </div>
      <div className="input-group">
        <label>Senha</label>
        <input type="password" placeholder="Insira sua senha" />
      </div>
      <div className="flex justify-between">
        <div className="input-group">
          <label>
            <input type="checkbox" />
            Lembrar minha senha
          </label>
        </div>
        <Link href="#">Esqueci minha senha</Link>
      </div>
      <div className="flex flex-col gap-4 mt-5">
        <button type="submit" className="btn primary">
          Entrar
        </button>
        <button type="button" className="btn">
          <AspectRatio src="/google.svg" size={{ height: 24 }} />
          Entrar com Google
        </button>
        <button type="button" className="btn dark">
          <AspectRatio src="/apple.svg" size={{ height: 24 }} />
          Entrar com Apple
        </button>
      </div>
    </form>
  );
}
