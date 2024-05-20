import FotoPerfil from '../assets/foto_perfil.webp';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';

export const About = () => {
    return (
        <section className='lg:items- mt-20 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-20'>
            <div className='h-60 w-60 overflow-hidden rounded-full border-[5px] border-lime-400 lg:order-2 lg:h-72 lg:w-72'>
                <img
                    src={FotoPerfil}
                    alt='Foto perfil'
                    className='h-full w-full grayscale'
                />
            </div>
            <div className='flex w-5/6 flex-col md:w-4/6 lg:w-3/6'>
                <h1 className='mb-1 text-5xl font-black leading-tight text-shark-100'>
                    Rodrigo Valenzuela
                </h1>
                <h2 className='mb-5 text-2xl font-black leading-tight text-shark-400'>
                    <span className='text-lime-500'>Full Stack</span> Developer
                    <span className='text-shark-400'>_</span>
                </h2>
                <p className='mb-2 text-lg text-shark-400'>
                    Ingeniero Civil en informática con{' '}
                    <span className='text-shark-100'>
                        +3 años de experiencia
                    </span>{' '}
                    dedicado al desarrollo web.
                </p>
                <p className='mb-7 text-lg text-shark-400'>
                    Me apasiona crear aplicaciones web limpias y fáciles de
                    usar. Enfocado en{' '}
                    <span className='text-shark-100'>React y Node.js</span>.
                </p>
                <div id='social' className='flex flex-wrap justify-start gap-5'>
                    <a href='#'>
                        <FaEnvelope size={25} fill='#9E9EA7' />
                    </a>
                    <a href='#'>
                        <PiLinkedinLogoBold size={25} fill='#9E9EA7' />
                    </a>
                    <a href='#'>
                        <AiFillGithub size={25} fill='#9E9EA7' />
                    </a>
                    <a href='#'>
                        <FaWhatsapp size={25} fill='#9E9EA7' />
                    </a>
                </div>
            </div>
        </section>
    );
};
