import React from 'react'
import { hot } from 'react-hot-loader/root'

// Before
// export default () => <h1>🌶/h1>
// After
export default hot(() => <h1>🌶, It works now</h1>)
