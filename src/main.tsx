import ReactDOM from 'react-dom/client'
import AppRouter from './routes'
import { Provider } from 'react-redux'
import store from './store'

import { GlobalStyle } from './styles/global'

GlobalStyle()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    {/* // <React.StrictMode> */}
      <AppRouter />
    {/* // </React.StrictMode> */}
  </Provider>
)
