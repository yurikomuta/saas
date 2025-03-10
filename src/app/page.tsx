import Image from 'next/image';
import logo from './assets/logo-LivroSaaS.svg';
import womanImg from './assets/woman.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <main>
      <section className=" container mx-auto text-center">
        <nav className="flex justify-between items-center py-4">
          <Image src={logo} alt="logo-LivroSaaS" />
          <div className="flex items-center gap-2">
            <Button variant={'link'}>Funcionamento</Button>
            <Button variant={'link'}>Preço</Button>
            <Button variant={"bg-white"}>Login</Button>
          </div>
        </nav>
        <h1 className="text-6xl font-bold mt-16 pb-20">Simplifique Seus Estudos</h1>
        <p className='text-gray-500 font-bold text-xl max-w-3xl mx-auto '>
          Deixe que que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.
        </p>

        <form className='mt-16'>
          <div className='flex gap-2 justify-center '>
            <Input type="email" name="newsletter" placeholder="Coloque seu email" className='max-w-sm border-gray-300 border'/>
            <Button type="submit">Assine Agora</Button>
          </div>
          <p className='text-xs text-muted-foreground mt-2'>Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
          
        </form>
      </section>

      <section className="bg-white py-16">
        <div className='container mx-auto'>
        <h2 className='text-5xl font-bold text-center'>Como Funciona?</h2>
        <div className='mx-24 flex items-center justify-between'>
          <Image src={womanImg} alt="carregando livros" />
          <ul className='text-2xl text-muted-foreground space-y-6 flex-shrink-0'>
            <li className='flex items-center justify-between gap-4'>Acesso a 1 ebook por mês<Check size={24}className='text-green-600'/> </li>
            <li className='flex items-center justify-between' >Curadoria especial <Check size={24}className='text-green-600'/></li>
            <li className='flex items-center justify-between' >Cancele quando quiser <Check size={24}className='text-green-600'/></li>
          </ul>
        </div>
        </div>
      </section>

      <section className=" py-16 text-center">
        <h2 className="text-5xl font-bold mt-16 pb-20">Preço Simples e Transparente</h2>
        <p className='text-gray-500 text-xl max-w-3xl mx-auto '>Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação.É por menos de um café por dia.</p>

      <Card className='w-[350] mx-auto text-left'>
        <CardHeader>
          <CardTitle>Plano Pro Premium VIP</CardTitle>
          <CardDescription>Tudo que você precisa para seus estudos</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-4xl text-bold mb-8 mt-4'>R$29<span className='font-normal text-muted-foreground text-lg'>/mês</span></p>
          <ul>
            <li className='flex gap-2 text-muted-foreground'><Check className='text-green-600 w-4'/> Acesso a 1 ebook por mês</li>
            <li className='flex gap-2 text-muted-foreground'><Check className='text-green-600 w-4'/>Curadoria especial</li>
            <li className='flex gap-2 text-muted-foreground'><Check className='text-green-600 w-4'/>Acesso Ilimitado</li>
            <li className='flex gap-2 text-muted-foreground'><Check className='text-green-600 w-4'/>Cancele quando quiser</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button>Assine Agora</Button>
        </CardFooter>
      </Card>

      </section>

      <section className="bg-white">
        <h2>Pronto Para Mudar a Sua Vida?</h2>
        <p>Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos</p>
        <Button type="submit">Assine Agora</Button>
        <p>Comece sua assinatura agora mesmo. Cancele quando quiser.</p>

        <footer>
          <Image src={logo} alt="logo-LivroSaaS" />
          <p>2024 LivrosSaaS. Todos os direitos reservados.</p>
        </footer>
      </section>

    </main>
  
  )
}
