import '../styles/globals.css'
import 'croppie/croppie.css'
import '../src/styles/signup.css'
import '../src/styles/login.css'
import '../src/styles/imageuploader.css'
import '../src/styles/user.css'
import '../src/styles/homepage.css'
import '../src/styles/post.css'
import '../src/styles/postModal.css'
import '../src/styles/gallery.css'
import '../src/styles/nav.css'
import '../src/styles/editLayout.css'
import '../src/styles/edit.css'
import '../src/styles/buttons.css'
import '../src/styles/upload.css'
import '../src/styles/resetpassword.css'
import '../src/styles/contacts.css'
import '../src/styles/changepassword.css'
import 'semantic-ui-css/semantic.min.css'
import ThemeContextProvider from '../src/components/contexts/theme/ThemeState'
function MyApp({ Component, pageProps }) {
  return( 
  <ThemeContextProvider>
    <Component {...pageProps}/>
  </ThemeContextProvider>)
}

export default MyApp
