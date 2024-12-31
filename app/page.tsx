import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, LogIn } from 'lucide-react';
import { AppLogo } from '@/components/ app-logo';
import { Button } from '@/components/ui/button';
import { robotoSlab } from '@/font';
import { APP_NAME } from '@/lib/constants';

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
      <div className='p-4'>
        <div className='container mx-auto flex justify-between h-20 shrink-0 items-center'>
          <AppLogo />
          <Link href='/login' className='flex items-center space-x-2'>
            <Button variant='secondary' size='lg' className='text-base'>
              Get access
              <LogIn className='size-6' />
            </Button>
          </Link>
        </div>
      </div>
      <section className='relative flex flex-col items-center justify-center py-12 lg:py-20'>
        <div className='text-center'>
          <span className='text-sm text-primary font-medium tracking-wide bg-primary/20 py-2 px-4 rounded-full'>
            Introducing Alloy Keeper
          </span>
          <h1 className='mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-200 '>
            Alloy Information{' '}
            <span className='bg-gradient-to-br from-blue-400 via-indigo-500 to-indigo-900 dark:from-blue-200 dark:via-indigo-300 dark:to-indigo-500 text-transparent bg-clip-text block'>
              made easier!
            </span>
          </h1>
          <p className='mt-6 md:text-lg text-gray-400  max-w-xl mx-auto'>
            Easily look up alloy information anytime, anywhere, and make smarter
            decisions in seconds. With instant access to detailed data, you can
            simplify your workflow, save time, and stay ahead in your industry..
          </p>
        </div>
        <div className='relative items-center w-full mx-auto mt-12'>
          <Image
            src='/alloy-hero.png'
            alt={`${APP_NAME} logo`}
            width={800}
            height={500}
            className='w-full rounded-lg shadow-2xl border border-gray-800 shadow-slate-500'
          />
        </div>
      </section>
    </main>
  );
}
