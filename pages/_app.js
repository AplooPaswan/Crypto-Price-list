import '../styles/globals.css'
import { ChakraProvider, Skeleton } from "@chakra-ui/react"
import DarkModeSwitch from '../Components/DarkModeSwitch'
import Navbar from '../Components/Navbar'
import AfterLoad from '../Components/AfterLoad'
import Loader from '../Components/Skeleton1'
import { extendTheme } from "@chakra-ui/react"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {



  const theme = extendTheme({
    colors: {
      myColor: {
        100: "#061121",
        // ...
        900: "#061121",
      },
    },
  })

  return (
    <div style={{display:''}}>
      <Head>
        <meta name="google-site-verification" content="IB2cU-2eG7MrUQfnVcXZiiU1vLntHBvCPPBSx3Htqvs" />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar colorScheme="myColor"/>
        {/* <Header/> */}
        <AfterLoad/>
      </ChakraProvider>
    </div>
    
  )
}

export default MyApp
