import Photo from '@/components/Photo';
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <main className='h-full'>
      <section className="container mx-auto h-full">
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between lg:pt-8 lg:pb-24'>
          <article className='text-center lg:text-left'>
            <span className='text-xl'>
              Software Developer
            </span>
            <h1 className='h1'>
              Hello I'm <br />
              <span className='text-accent'>
                Mohamed Aashir
              </span>
            </h1>
            <p className='max-w-[500px] mb-9 text-[gray] dark:text-white/80'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut consectetur, suscipit alias porro veniam.
            </p>
            <div className='flex flex-col lg:flex-row items-center gap-8'>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>
                  Download CV
                </span>
                <FiDownload className='text-xl' />
              </Button>
              <aside className='mb-8 lg:mb-0'>
                <Socials containerStyles={'flex gap-6'} iconStyles={'w-9 h-9 border-accent rounded-full flex justify-center border items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'} />
              </aside>
            </div>
          </article>
          <aside className='mb-8 lg:mb-0'>
            <Photo />
          </aside>
        </div>
      </section>
      <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
        <div className="container mx-auto">
          <Stats />
        </div>
      </section>
    </main>
  )
}

export default Home;
