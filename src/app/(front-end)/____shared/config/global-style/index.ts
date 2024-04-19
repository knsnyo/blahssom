'use client'

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
`

export default GlobalStyles
