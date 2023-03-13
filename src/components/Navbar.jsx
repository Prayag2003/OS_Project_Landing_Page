// MUI
import {
	AppBar,
	Toolbar,
	Box,
	IconButton,
	Button,
	Typography
} from '@mui/material';

const Navbar = () => {
	const navItems = ['Projects', 'About Us'];

	return (
		<AppBar position='static'>
			<Toolbar>
				<Box
					sx={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between'
					}}
				>
					{/* Logo and Title */}
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						{/* Logo */}
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

						{/* Title */}
						<Typography variant='h5'>OS Lab Projects</Typography>
					</Box>

					{/* Navigation Links */}
					<Box>
						{navItems.map(navItem => {
							return (
								<Button
									href=''
									key={`${navItem}`}
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
		</AppBar>
	);
};

export default Navbar;
