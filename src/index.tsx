import React from 'react'
import styled from 'styled-components/macro'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const BaseLayout = styled.div``

const Wrapper = styled(BaseLayout)<{ param1?: string, param2?: string }>``

ReactDOM.render((
  <Wrapper>
    <App />
  </Wrapper>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
