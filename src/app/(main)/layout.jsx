import Footer from '@/components/share/Footer';
import Navbar from '@/components/share/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div >
            {children}
        </div>
    );
};

export default MainLayout;