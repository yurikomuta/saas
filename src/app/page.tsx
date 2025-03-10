import Image from 'next/image';
import logo from './assets/logo-LivroSaaS.svg';
import womanImg from './assets/woman.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, MenuIcon } from 'lucide-react';
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
      <section className=" container mx-auto text-center pb-20 px-4 md:px-0">
        <nav className="flex justify-between items-center py-4">
          <Image src={logo} alt="logo-LivroSaaS" />
          <MenuIcon size={20} className='md:hidden cursor-pointer'/>
          <div className=" items-center gap-2 hidden md:flex">
            <Button variant={'link'}>Funcionamento</Button>
            <Button variant={'link'}>Preço</Button>
            <Button variant={"bg-white"}>Login</Button>
          </div>
        </nav>
        <h1 className="md:text-6xl text-2xl font-bold mt-8 md:mt-16 ">Simplifique Seus Estudos</h1>
        <p className='text-gray-500 font-bold text-sm md:text-xl max-w-3xl mx-auto mt-4 '>
          Deixe que que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.
        </p>

        <form className='md:mt-16 mt-10'>
          <div className='flex gap-2 justify-center '>
            <Input type="email" name="newsletter" placeholder="Coloque seu email" className='max-w-sm border-gray-300 border'/>
            <Button type="submit">Assine Agora</Button>
          </div>
          <p className='text-xs text-muted-foreground mt-2'>Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
          
        </form>
      </section>

      <section className="bg-white md:py-16 py-8">
        <div className='container mx-auto'>
        <h2 className='text-2xl md:text-4xl font-bold text-center'>Como Funciona?</h2>
        <div className='mx-24 xl:mx-80 flex flex-col md:flex-row items-center justify-between'>
          <Image src={womanImg} alt="carregando livros" className='max-w-xs'/>
          <ul className='md:text-2xl  text-muted-foreground space-y-4 md:space-y-6 flex-shrink-0'>
            <li className='flex items-center justify-between gap-4'>Acesso a 1 ebook por mês<Check size={24}className='text-green-600'/> </li>
            <li className='flex items-center justify-between' >Curadoria especial <Check size={24}className='text-green-600'/></li>
            <li className='flex items-center justify-between' >Cancele quando quiser <Check size={24}className='text-green-600'/></li>
          </ul>
        </div>
        </div>
      </section>

      <section className=" py-16 text-center ">
        <h2  className="md:text-6xl text-2xl font-bold mt-8 md:mt-16 ">Preço Simples e Transparente</h2>
        <p className='text-gray-500 mt-4 text-sm md:text-xl max-w-3xl mx-auto px-2'>Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação.É por menos de um café por dia.</p>

      <Card className='w-[350] mx-auto text-left md:mt-20 mt-10 px-4'>
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
          <Button className='w-full'>Assine Agora</Button>
        </CardFooter>
      </Card>

      </section>

      <section className="md:py-16 py-8 text-center">
        <h2 className=" text-2xl font-bold mt-16 pb-20 ">Pronto Para Mudar a Sua Vida?</h2>
        <p className='text-gray-500 text-xl max-w-3xl mx-auto px-2'>Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos</p>
        <Button type="submit" className='mt-14 mx-auto w-96'>Assine Agora</Button>
        <p className='text-xs text-muted-foreground mt-2'>Comece sua assinatura agora mesmo. Cancele quando quiser.</p>

        <footer className='mt-16 border-t border-gray-300 pt-10'>
          <Image src={logo} alt="logo-LivroSaaS" className='mx-auto' />
          <p className='text-xs text-muted-foreground'>© 2024 LivroSaaS. Todos os direitos reservados.</p>
        </footer>
      </section>

    </main>
  
  )
}
