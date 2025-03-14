import React from 'react';
import { IMAGES } from '../constant';
import { FaHome } from 'react-icons/fa';
import { Outlet } from 'react-router';

export const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
             <header className="absolute top-0 left-0 right-0 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <img src={IMAGES.logo} className="flex items-center hover:opacity-80 transition-opacity" alt='Group of people working' />
            
            <button className="bg-green-600 text-white px-5 space-x-2 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center text-sm" aria-label="Home">
              <FaHome color='white' />
              <span className="material-symbols-outlined mr-1">Home</span>
            </button>
          </div>
        </header>
            <main className="content">
            <Outlet /> 
            </main>
        </div>
    );
}