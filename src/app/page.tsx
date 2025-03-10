import Image from 'next/image';
import logo from './assets/logo-LivroSaaS.svg';
import womanImg from './assets/woman.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


export default function Home() {
  return (
    <main>
      <section className="container mx-auto text-center">
        <nav className="flex justify-between items-center py-4">
          <Image src={logo} alt="logo-LivroSaaS" />
          <div className="flex items-center gap-2">
            <Button variant={'link'}>Funcionamento</Button>
            <Button variant={'link'}>Preço</Button>
            <Button variant={"bg-white"}>Login</Button>
          </div>
        </nav>
        <h1 className="text-6xl font-bold  mt-16">Simplifique Seus Estudos</h1>
        <p className='text-gray-500 font-bold text-xl max-w-3xl mx-auto'>
          Deixeque que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.
        </p>

        <form className='mt-16'>
          <div className='flex gap-2 justify-center pb-20'>
            <Input type="email" name="newsletter" placeholder="Coloque seu email" className='max-w-sm border-gray-300 border'/>
            <Button type="submit">Assine Agora</Button>
          </div>
          
          <p className='text-xs text-muted-foreground mt-2 '>Comece sua assinatura agora mesmo. Cancele quando quiser.</p>
        </form>
      </section>

      <section className="bg-white">
        <h2>Como Funciona?</h2>
        <Image src={womanImg} alt="carregando livros" />
        <ul>
          <li>Acesso a 1 ebook por mês</li>
          <li>Curadoria especial</li>
          <li>Cancele quando quiser</li>
        </ul>
      </section>

      <section>
        <h2>Preço Simples e Transparente</h2>
        <p>Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação.É por menos de um café por dia.</p>
        <div>
          <h3>Plano Pro Premium VIP</h3>
          <p>Tudo que você precisa para seus estudos</p>
          <p>R$29/mês</p>
          <ul>
            <li>Acesso a 1 ebook por mês</li>
            <li>Curadoria especial</li>
            <li>Acesso Ilimitado</li>
            <li>Cancele quando quiser</li>
          </ul>
        </div>
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
