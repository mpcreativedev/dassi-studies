import React from 'react'
import whyDidYouRender from '@welldone-software/why-did-you-render'

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  //const whyDidYouRender = require('@welldone-software/why-did-you-render')
  //const ReactRedux = require('react-redux')
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    /* trackExtraHooks: [
      [
        ReactRedux, 'useSelector'
      ],
    ], */
  })
}
