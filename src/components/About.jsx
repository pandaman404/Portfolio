import FotoPerfil from '../assets/foto_perfil.webp';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { FaWhatsapp } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FaEnvelope } from 'react-icons/fa';
import { RxDownload } from 'react-icons/rx';

export const About = () => {
    return (
        <section
            id='about'
            className='flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-20'
        >
            <div className='h-60 w-60 overflow-hidden rounded-full border-[5px] border-lime-400 lg:order-2 lg:h-72 lg:w-72'>
                <img
                    src={FotoPerfil}
                    alt='Foto perfil'
                    className='h-full w-full grayscale'
                />
            </div>
            <div className='flex w-5/6 flex-col md:w-4/6 lg:w-3/6'>
                <h1 className='mb-1 text-5xl font-black leading-tight text-shark-100'>
                    Hola! soy Rodrigo
                </h1>
                <h2 className='mb-5 text-2xl font-black leading-tight text-shark-400'>
                    <span className='text-lime-500'>Full Stack</span> Developer
                    <span className='text-shark-400'>_</span>
                </h2>
                <p className='mb-2 text-shark-400'>
                    Ingeniero Civil en informática con{' '}
                    <span className='text-shark-100'>
                        +3 años de experiencia
                    </span>{' '}
                    dedicado al desarrollo web.
                </p>
                <p className='mb-7 text-shark-400'>
                    Me apasiona crear aplicaciones web limpias y fáciles de
                    usar. Mi stack de tecnologías incluye{' '}
                    <a href='#' className='text-shark-100'>
                        React
                    </a>
                    ,{' '}
                    <a href='#' className='text-shark-100'>
                        Node.js
                    </a>
                    ,{' '}
                    <a href='#' className='text-shark-100'>
                        SQL
                    </a>
                    ,{' '}
                    <a href='#' className='text-shark-100'>
                        Sprint Boot
                    </a>
                    , entre otros.
                </p>
                <div
                    id='social'
                    className='flex flex-wrap items-center justify-start gap-5'
                >
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

                    <button className='flex items-center gap-2 rounded border border-shark-500 px-5 py-2 text-sm text-shark-400'>
                        <RxDownload size={20} fill='#9E9EA7' />
                        Descargar CV
                    </button>
                </div>
            </div>
        </section>
    );
};
