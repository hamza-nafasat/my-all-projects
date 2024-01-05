import Head from "next/head";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/Globel/Footer/Footer";
import NavBar from "@/components/Globel/Header/NavBar";

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-monti",
});
export default function App({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main
				className={`${montserrat.variable} font-monti bg-light dark:bg-dark w-full min-h-screen`}
			>
				<NavBar />
				<AnimatePresence mode="wait">
					<Component {...pageProps} key={router.asPath} />
				</AnimatePresence>
				<Footer />
			</main>
		</>
	);
}
