import Footer from '@/components/Footer'
import '../app/globals.scss'
import LeftMain from '@/components/LeftMain'

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
                <Footer />
            </body>
        </html>
    )
}

