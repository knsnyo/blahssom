'use client'

import COLOR from 'src/app/(front-end)/___shared/style/color'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  color: inherit;
}

hr {
  width: 100%;
  background-color: ${COLOR.grey.e4e4e4};
  height: 1px;
  border: 0;
}
`

export default GlobalStyles
