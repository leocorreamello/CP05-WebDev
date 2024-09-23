import fotoeu from '../../public/eu5.png'
import html from '../../public/html-5.png'
import css from '../../public/css-3.png'
import js from '../../public/js.png'
import react from '../../public/react.png'
import bootstrap from '../../public/bootstrap.png'
import java from '../../public/java.png'
import git from '../../public/git.png'
import github from '../../public/github.png'
import linkedin from '../../public/linkedin.png'
import whatsapp from '../../public/whatsapp.png'
import curriculo from '../../public/curriculo.png'

export default function Sobre() {

    return (
        <>
          <main>
            <div className="flex items-center min-h-screen justify-center">
                <img src={fotoeu} alt="minha foto" className='w-[500px] rounded-full outline outline-[#0500FF] absolute mr-[900px]'/>
                <div className="flex bg-[#50616B] rounded-[40px] border-gradient size-3/5 ml-48 h-[700px]">
                    <div className='ml-[400px] mr-[100px] mt-[50px]'>
                        <h1 className="text-6xl text-center">Leonardo Mello</h1>
                        <p className="text-3xl text-justify mt-[20px]">
                            Olá, me chamo Leonardo Mello, tenho 19 anos de idade e atualmente estou cursando Engenharia de Software 
                            na FIAP. Estou à procura do meu primeiro estágio na área.
                        </p>
                        <h2 className="text-4xl mt-[20px]">Tecnologias</h2>
                        <div className='flex mt-[20px] gap-4'>
                            <img src={html} alt="fotohtml" className='size-[77px]'/>
                            <img src={css} alt="fotocss" className='size-[77px]'/>
                            <img src={js} alt="fotojs" className='size-[77px]'/>
                            <img src={react} alt="fotoreact" className='size-[77px]'/>
                            <img src={bootstrap} alt="fotoboot" className='size-[77px]'/>
                            <img src={java} alt="fotojava" className='size-[77px]'/>
                            <img src={git} alt="fotogit" className='size-[77px]'/>
                        </div>
                        <h2 className="text-4xl mt-[20px]">Contato</h2>
                        <div className='flex mt-[20px] gap-7'>
                            <a href=""><img src={github} alt="fotogithub" className='size-[77px]'/></a>
                            <a href=""><img src={linkedin} alt="fotolinkedin" className='size-[77px]'/></a>
                            <a href=""><img src={whatsapp} alt="fotowhatsapp" className='size-[77px]'/></a>
                            <a href=""><img src={curriculo} alt="fotocurriculo" className='size-[77px]'/></a>
                        </div>
                    </div>
                </div>
            </div>
          </main>
        </>
    )
}