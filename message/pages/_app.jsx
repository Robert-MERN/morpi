import '../styles/globals.css'
import { ContextProvider } from '../context/ContextProvider'
import NextProgress from "nextjs-progressbar";
import Layout from '../layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <NextProgress
        startPosition={0.1}
        stopDelayMs={100}
        height={3}
        color="rgb(124 58 237)"
        options={{ "showSpinner": false, 'easing': 'ease', 'speed': 500 }}
      />
      <ContextProvider >
        <Layout >
          <Component {...pageProps} />
        </Layout>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          limit={1}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="colored"

        />
      </ContextProvider>
    </>
  )
}



export default MyApp
