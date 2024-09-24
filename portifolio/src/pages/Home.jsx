import github3 from '../../public/github3.png'
import linkedin2 from '../../public/linkedin2.png'
import whatsapp2 from '../../public/whatsapp2.png'
import seta from '../../public/seta.png'


export default function Home() {

    return (
        <>  
            <main className="flex items-center min-h-screen">
                <div className='flex-col'>
                    <div className="mx-32">
                        <h1 className="text-6xl">Olá eu sou o</h1>
                        <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#00FFD1] to-[#0500FF]">
                            Leonardo Mello
                        </h1>
                        <h1 className="text-8xl">Engenheiro de Software</h1>
                    </div>
                    <div className='flex mx-32 mt-6 gap-6'>
                        <a href=""><img src={github3} alt="fotogit" className='size-[77px]'/></a>
                        <a href=""><img src={linkedin2} alt="fotolinkedin" className='size-[77px]'/></a>
                        <a href=""><img src={whatsapp2} alt="fotowhatsapp" className='size-[77px]'/></a>
                    </div>
                    
                </div>
            </main>
            <div className='flex justify-center'>
                <div className='flex-col mt-[-10%]'>
                    <h1 className='text-[20px]'>Formulário de Contato</h1>
                    <div className='flex justify-center'>
                        <img src={seta} alt="seta" className='size-[40px]'/>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex-col text-center'>
                    <h1 className='text-6xl mb-4'>Contato</h1>
                    <h1 className='text-2xl mb-4'>Preencha o formulário abaixo para entrar em contato comigo. 
                        Deixe seu feedback sobre o site, tire<br />dúvidas sobre algo ou me contrate!
                    </h1>
                    <div className='bg-white text-black'>
                        <form onSubmit=''>
                            <div className='flex justify-items-center justify-center justify-self-center content-center items-center'>
                                <div>
                                    <label htmlFor="nome">Nome:</label>
                                    <input
                                    type="text"
                                    id="nome"
                                    required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                    type="email"
                                    id="email"
                                    required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="mensagem">Mensagem:</label>
                                <textarea
                                id="mensagem"
                                required
                                />
                            </div>
                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}