import React from 'react';

export default function Menu() {
    return(
        <div>
                <ul className="flex justify-around p-4">
                        <li className="inline m-2"><a href="https://trost.dev" className="border-b border-transparent transform duration-500 inline text-2xl ml-2 hover:border-black">Portfolio</a></li>
                        <li className="inline m-2"><a href="/blog" className="border-b border-transparent transform duration-500 inline text-2xl ml-2 hover:border-black">Blog</a></li>
                        <li className="inline m-2"><a href="/inquiry" className="border-b border-transparent transform duration-500 inline text-2xl ml-2 hover:border-black">Contact</a></li>
                </ul>
        </div>        
)}