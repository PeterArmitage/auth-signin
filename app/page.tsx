import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { poppins } from './fonts';
import { cn } from '@/lib/utils';
import { LoginButton } from '@/components/auth/login-button';

export default function Home() {
	return (
		<main className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to to-blue-800'>
			<div className='space-y-6'>
				<h1
					className={cn(
						'text-6xl font-semibold text-white drop-shadow-md',
						poppins.className
					)}
				>
					Auth
				</h1>
				<p className='text-white text-lg'>A simple authentication service.</p>
			</div>
			<LoginButton>
				<Button variant='secondary' size='lg'>
					Sign In
				</Button>
			</LoginButton>
		</main>
	);
}
