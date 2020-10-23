import React from 'react'
import './global.css'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './contexts/authContext'

function App() {
	return (
		<AuthProvider>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover 
			/>
			<Routes />
		</AuthProvider>
	)
}

export default App
