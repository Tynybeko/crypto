'use client'
import React, { useState, useEffect, useRef } from 'react';


const InstallBanner = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
        };
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Пользователь установил приложение');
                } else {
                    console.log('Пользователь отклонил установку приложения');
                }
                setDeferredPrompt(null);
            });
        }
    };


    return (
        <button
            onClick={handleInstallClick}
            style={{ display: deferredPrompt ? 'block' : 'none' }}
        >
            Установить приложение
        </button>
    );
};

export default InstallBanner;
