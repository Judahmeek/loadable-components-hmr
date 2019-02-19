import { hot } from 'react-hot-loader/root'
import React from 'react'

// import LoadableComponents from './LoadableComponents'
import loadable from '@loadable/component'
const LoadableComponents = loadable(() => import('./LoadableComponents'))

const App = () => <LoadableComponents />

export default hot(App)
