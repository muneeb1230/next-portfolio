// components/Header.js
import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='navbar'>
                    <h2>Portfolio</h2>
                    <nav className='menu'>
                        <ul>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='#about'>About</Link></li>
                            <li><Link href='#services'>Services</Link></li>
                            <li><Link href='#skill'>Skills</Link></li>
                            <li><Link href='#portfolio'>Portfolio</Link></li>
                            <li><Link href='#contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
