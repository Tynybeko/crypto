import Footer from '@/components/Footer'
import '../app/globals.scss'
import LeftMain from '@/components/LeftMain'
import Head from 'next/head'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <body>
                <div className="container">
                    <Head>
                        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                        <link rel="manifest" href="/favicon/site.webmanifest" />
                        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#7c7c7c" />
                        <meta name="msapplication-TileColor" content="#000000" />
                        <meta name="theme-color" content="#000000" />
                    </Head>
                    <div className="leftMain">
                        <LeftMain />
                    </div>
                    <main>
                        {children}
                    </main>
                </div>
                <Footer />
            </body>
        </>

    )
}

