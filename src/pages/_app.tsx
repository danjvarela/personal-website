import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {useEffect} from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const importTE = async () => {
      (await import("tw-elements")).default;
    };
    importTE();
  }, []);
  
  return <Component {...pageProps} />
}
