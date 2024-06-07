import Link from 'next/link';
import React from 'react';
import DesktopNav from './DesktopNav';
import { ModeToggle } from './ui/modetoggle';
import MobileNav from './MobileNav';

const Navbar = () => {
    return (
        <nav className='py-8 xl:py-12'>
            <div className="container mx-auto flex justify-between items-center">
                <Link href={'/'}>
                    <h1 className='text-4xl font-semibold'>
                        Aashir<span className='text-accent'>.</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <DesktopNav />
                    <ModeToggle />
                </div>
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
