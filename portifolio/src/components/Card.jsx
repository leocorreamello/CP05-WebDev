import projeto1 from '../../public/westwise.png'
import codigo from '../../public/codigo.jpg'
import site from '../../public/site.jpg'

export default function Projetos() {

    return (
        <>
            <main>
            <div className='flex-col justify-center justify-items-center text-center'>
                <div>
                    <h1 className='text-6xl'>Projetos</h1>
                </div>
                <div className='flex justify-center mt-[40px] gap-20'>
                    <div className='flex-col justify-center'>
                        <h1 className='text-center text-3xl'>WasteWise</h1>
                        <img src={projeto1} alt="projeto1" className='w-96 rounded-[40px] border-gradient'/>
                        <div className='flex gap-3 mt-[10px]'>
                            <a href=""><img src={codigo} alt="codigosite"/></a>
                            <a href=""><img src={site} alt="linksite"/></a>
                        </div>
                    </div>
                    <div className='flex-col justify-center'>
                        <h1 className='text-center text-3xl'>WasteWise</h1>
                        <img src={projeto1} alt="projeto1" className='w-96 rounded-[40px] border-gradient'/>
                        <div className='flex gap-3 mt-[10px]'>
                            <a href=""><img src={codigo} alt="codigosite"/></a>
                            <a href=""><img src={site} alt="linksite"/></a>
                        </div>
                    </div>
                    <div className='flex-col justify-center'>
                        <h1 className='text-center text-3xl'>WasteWise</h1>
                        <img src={projeto1} alt="projeto1" className='w-96 rounded-[40px] border-gradient'/>
                        <div className='flex gap-3 mt-[10px]'>
                            <a href=""><img src={codigo} alt="codigosite"/></a>
                            <a href=""><img src={site} alt="linksite"/></a>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-[40px] gap-20'>
                    <div className='flex-col justify-center'>
                        <h1 className='text-center text-3xl'>WasteWise</h1>
                        <img src={projeto1} alt="projeto1" className='w-96 rounded-[40px] border-gradient'/>
                        <div className='flex gap-3 mt-[10px]'>
                            <a href=""><img src={codigo} alt="codigosite"/></a>
                            <a href=""><img src={site} alt="linksite"/></a>
                        </div>
                    </div>
                    <div className='flex-col justify-center'>
                        <h1 className='text-center text-3xl'>WasteWise</h1>
                        <img src={projeto1} alt="projeto1" className='w-96 rounded-[40px] border-gradient'/>
                        <div className='flex gap-3 mt-[10px]'>
                            <a href=""><img src={codigo} alt="codigosite"/></a>
                            <a href=""><img src={site} alt="linksite"/></a>
                        </div>
                    </div>
                    <div className='flex-col justify-center'>
                        <h1 className='text-center text-3xl'>WasteWise</h1>
                        <img src={projeto1} alt="projeto1" className='w-96 rounded-[40px] border-gradient'/>
                        <div className='flex gap-3 mt-[10px]'>
                            <a href=""><img src={codigo} alt="codigosite"/></a>
                            <a href=""><img src={site} alt="linksite"/></a>
                        </div>
                    </div>
                </div>
            </div>
          </main>
        </>
    )
}