import { Hydrate } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import NavBar from './navigation/NavBar';
import Footer from './common/Footer';
import Providers from '@/app/providers/Providers';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Providers>
            <Hydrate state={pageProps.dehydratedState}>
                <main>
                    <NavBar />
                    <Component {...pageProps} />
                    <Footer />
                </main>
            </Hydrate>
        </Providers>
    );
}
