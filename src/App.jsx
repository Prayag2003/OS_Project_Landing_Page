// MUI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// Local Files
import assets from './assets';
import AppLayout from './AppLayout';

function App() {
	return (
		<ThemeProvider theme={createTheme(assets.theme)}>

			<CssBaseline />
			<AppLayout />
		</ThemeProvider>
	);
}

export default App;
