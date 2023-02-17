import { Card } from '@mui/material';

const ProjectCard = props => {
	const { project } = props;

	return (
		<Card
			sx={{
				p: '12px',
				'&:hover': {
					backgroundColor: 'primary.dark',
					boxShadow: '0 0 5px red, 0 0 5px red'
				}
			}}
		>
			{project}
		</Card>
	);
};

export default ProjectCard;
