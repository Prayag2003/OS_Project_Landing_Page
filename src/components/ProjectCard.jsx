import { Card } from '@mui/material';

const ProjectCard = props => {
	const { project } = props;

	return (
		<Card
			sx={{
				height: '350px',
				p: '12px',
				alignItems: 'center',
				'&:hover':
				{
					transitionDuration: '0.4s',
					backgroundColor: '#f50057',
					boxShadow: '0 0 5px white, 0 0 5px white'
				}
			}}
		>
			{project}
		</Card >
	);
};

export default ProjectCard;
