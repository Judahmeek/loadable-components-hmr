import { hot } from 'react-hot-loader/root'
import React from 'react'

import loadable from '@loadable/component'
// import LoadableComponents from './LoadableComponents'

const LoadableComponents = loadable(() => import('./LoadableComponents'))

const App = () => <LoadableComponents />

export default hot(App)
