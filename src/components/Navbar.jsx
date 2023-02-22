// MUI
import { AppBar, Toolbar, Box, IconButton, Button } from '@mui/material';

const Navbar = () => {
	const navItems = ['Projects', 'About Us'];
	// const projectLinks = [];

	return (
		<AppBar position='static' >
			<Toolbar>
				<Box
					sx={{

						width: '100vw',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}
				>
					<Box>
						<IconButton
							href='/'
							sx={{
								'&:hover': {
									background: 'none'
								}
							}}
						>
							<img src='logo.png' width='48px' />
						</IconButton>
					</Box>
					<Box>
						{navItems.map(navItem => {
							return (
								<Button
									href=''
									sx={{
										mr: '12px',
										'&:last-child': {
											mr: '0'
										}
									}}
								>
									{navItem}
								</Button>
							);
						})}
					</Box>
				</Box>
			</Toolbar>
		</AppBar >
	);
};

export default Navbar;
