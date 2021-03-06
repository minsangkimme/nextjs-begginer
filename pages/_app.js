import Layout from './../components/layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <style jsx global>{`
                a {
                    color: green;
                }
            `}</style>
        </Layout>
    )
}