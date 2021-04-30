import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import Layout from 'common/components/templates/Main'
import App from './components/App'
import reducers from './reducers'

/* Redux Dev Toolsを有効化する */
const store = createStore(reducers, composeWithDevTools(applyMiddleware()))

render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>,
  document.getElementById('root'),
)
