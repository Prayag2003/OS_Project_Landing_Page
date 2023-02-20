import { Grid, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ButtonBase from '@mui/material/ButtonBase';
import styled from '@emotion/styled';

const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
});

const AppLayout = () => {

	const projects = ['SJF', 'Dining Philosophers', 'C-Disk Algorithm', 'XYZ- Algorithm'];

	return (

		<Grid container xs={12} direction="column" alignItems={'center'} width='850px'>

			<Grid item xs={12} sx={{ mb: '12px' }}>
				<Navbar />
			</Grid>
			<Grid item direction={'column'} width='700px'>
				<Typography variant='h2' color='green' align="center" alignItems={'center'}> OS Projects  </Typography>
				<ButtonBase sx={{ width: 80, height: 80, align: 'left', padding: '6px' }}>
					<Img src="./public/logo.png" />
				</ButtonBase>

			</Grid>
			<Grid item >
				<Typography variant='h5' color='red' align="center">
					This is SubTopic.
				</Typography>
				<Typography align="left" color="skyblue">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
				</Typography>
				<Typography align="left" color="yellow">
					There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
				</Typography>
			</Grid>

			<Grid item container spacing={'12px'}
				xs={12}
				sx={{
					m: '12px',
					p: '0 12px 12px 0',

					backgroundColor: '#000',
				}}
			>
				{projects.map(project => {
					return (
						<Grid item xs={12} sm={6} sx={{
							alignContent: "center",
							alignItems: "center"
						}}>
							<ProjectCard project={project} />
						</Grid>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default AppLayout;
