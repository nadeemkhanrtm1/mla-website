'use client'


import { useEffect, useState } from 'react';
import DesktopVersion from '../imports/mlawebsite';
import MobileVersion from './component/mobile-version/moblile-version';


export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white">
      {isMobile ? <MobileVersion /> : <DesktopVersion />}
    </div>
  );
}

