import { Button, Card, Grid } from '@mui/material';

const ProjectCard = props => {
	const { project } = props;

	return (
		<Card>
			<Grid
				container
				width='100%'
				height='100%'
				alignItems='center'
				justifyContent='center'
				sx={{ pt: '12px' }}
			>
				<Grid item>
					<img src='logo.png' />
				</Grid>
				{/* Action Buttons */}
				<Grid item container>
					<Grid item xs={6}>
						<Button href={project.infoLink} fullWidth>
							More Info
						</Button>
					</Grid>
					<Grid item xs={6}>
						<Button href={project.link} fullWidth>
							Preview
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Card>
	);
};

export default ProjectCard;
