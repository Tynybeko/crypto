import { Metadata } from 'next'
import '../app/globals.scss'
import LeftMain from '@/components/LeftMain'
import Header from '@/components/Header'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='ru'>
            <body>
                <div className="container">
                    <div className="leftMain">
                        <LeftMain />
                    </div>
                    <main>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}

