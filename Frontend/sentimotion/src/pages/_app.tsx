"use client";
import {
    Hydrate
} from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google'
import NavBar from './navigation/NavBar';
import Footer from './common/Footer';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function App(props: AppProps) {

    const { Component, pageProps } = props;

    return (
            <Hydrate state={pageProps.dehydratedState}>
                <main className={roboto.className}>
                <NavBar/>
                <Component {...pageProps} />
                <Footer />
                </main>
            </Hydrate>
    );
}
