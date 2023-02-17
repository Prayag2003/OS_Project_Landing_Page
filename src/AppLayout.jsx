import { Grid } from '@mui/material';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';

const AppLayout = () => {
	const projects = ['SJF', 'Dining Philosophers', '3', '4'];

	return (
		<Grid container xs={12}>
			<Grid item xs={12} sx={{ mb: '12px' }}>
				<Navbar />
			</Grid>
			<Grid item container>
				<Grid
					item
					container
					spacing={'12px'}
					xs={12}
					sx={{
						m: '12px',
						p: '0 12px 12px 0',
						borderRadius: '24px',
						backgroundColor: 'primary.main'
					}}
				>
					{projects.map(project => {
						return (
							<Grid item xs={12} sm={6}>
								<ProjectCard project={project} />
							</Grid>
						);
					})}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AppLayout;
