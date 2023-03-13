// MUI
import { Grid, Typography } from '@mui/material';
// Local Files
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

const AppLayout = () => {
	const projects = [
		{
			name: 'Shortest Job First',

			link: '',
			infoLink: ''
		},

		{
			name: 'Dining Philosophers',

			link: '',
			infoLink: ''
		},

		{
			name: 'C-Look Disk Algorithm',

			link: '',
			infoLink: ''
		},

		{
			name: 'FIFO Page Replacement',
			link: '',
			infoLink: ''
		}
	];

	return (
		<Grid container width='100vw'>
			{/* Navbar */}
			<Grid item xs={12}>
				<Navbar />
			</Grid>

			<Grid item container xs={12}>
				{/* Project Cards */}
				<Grid
					item
					container
					spacing='12px'
					sx={{
						m: '12px',
						p: '0 12px 12px 0',
						borderRadius: '24px',
						backgroundColor: 'primary.dark'
					}}
				>
					{projects.map(project => {
						return (
							<Grid
								item
								container
								key={`${project.name} key`}
								xs={12}
								sm={6}
								sx={{
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<Grid item xs={12}>
									<ProjectCard
										key={`${project.name} key1`}
										project={project}
									/>
								</Grid>
								<Grid item>
									<Typography
										color='background.default'
										fontWeight='bold'
									>
										{project.name}
									</Typography>
								</Grid>
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AppLayout;
