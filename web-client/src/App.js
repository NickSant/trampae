import React from 'react'
import './global.css'
import Routes from './routes'

import { AuthProvider } from './contexts/authContext'

function App() {
	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	)
}

export default App
