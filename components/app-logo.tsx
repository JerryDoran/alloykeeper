import { robotoSlab } from '@/font';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

export function AppLogo() {
  return (
    <Link href='/' className='flex-start'>
      <div
        className={`${robotoSlab.className} flex items-center justify-center space-x-1`}
      >
        <Image
          src='/alloy.png'
          alt={`${APP_NAME} logo`}
          width={50}
          height={50}
          priority
        />
        <h1
          className={`${robotoSlab.className} sm:text-2xl text-lg font-bold text-gray-200`}
        >
          {APP_NAME}
        </h1>
      </div>
    </Link>
  );
}
