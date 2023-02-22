import { Button, Grid, Typography } from '@mui/material';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import ButtonBase from '@mui/material/ButtonBase';
import styled from '@emotion/styled';
import assets from './assets';

const Img = styled('img')({
	margin: 'auto',
	display: 'block',
	maxWidth: '100%',
	maxHeight: '100%',
});

const AppLayout = () => {

	const projects = ['SJF', 'Dining Philosophers', 'C-Look Disk Algorithm', 'First-In-First-Out Page Replacement'];

	return (

		/* Grid Container */
		<Grid container xs={12} direction="column" alignItems={'center'} width='850px'>

			{/* Contains NavBar */}
			<Grid item xs={12} sx={{ mb: '12px' }}>
				<Navbar color = "primary.skyblue" />
			</Grid>


			{/* INTRODUCTION */}
			<Grid item direction={'column'} width='800px'>
				<ButtonBase sx={{ width: 80, height: 100, align: 'left', padding: '6px', align: 'center' }}>

					<Img src="logo.png" />
					<Grid item>
						<Typography variant='h3' color='primary.main' align="left" alignItems={'left'} > OS ALGORITHMS </Typography>
					</Grid>
				</ButtonBase>
			</Grid>

			<Grid item >
				<Typography variant='h5' align="center" color='primary.skyblue'>
					BASICS  OF  OPERATION  SYSTEMS
				</Typography>

				<Typography align="left" color="#ff9100" >
					An operating system acts as an intermediary between the user of a computer and computer hardware. The purpose of an operating system is to provide an environment in which a user can execute programs conveniently and efficiently.
					An operating system is a software that manages computer hardware. The hardware must provide appropriate mechanisms to ensure the correct operation of the computer system and to prevent user programs from interfering with the proper operation of the system.
				</Typography>

				<Typography display="block" color='primary.blue'>
					These algorithms are either non-preemptive or preemptive. Non-preemptive algorithms are designed so that once a process enters the running state, it cannot be preempted until it completes its allotted time, whereas the preemptive scheduling is based on priority where a scheduler may preempt a low priority running process anytime when a high priority process enters into a ready state.
				</Typography>


				{/* -------------------- ALGO-1 --------------------*/}
				{/* IMAGE */}
				<Grid item>
					<ButtonBase sx={{ width: 400, height: 300 }}>
						<Img alt="complex" src="algo-3.jpg" />
					</ButtonBase>
				</Grid>

				<Grid item xs={12} sm={6}>
					<Grid item xs container direction="column">
						<Grid item xs>
							<Typography variant="subtitle1" component="div" align='center' color='primary.skyblue'>
								SHORTEST JOB FIRST
							</Typography>
						</Grid>
					</Grid>
					<Grid>
						<Typography variant="block" align="left" color="primary.skyblue">
							This is also known as shortest job first
							This is a non-preemptive, pre-emptive scheduling algorithm.
							Best approach to minimize waiting time  .....
						</Typography>
					</Grid>
					<Button variant="contained" color="secondary">More Info</Button>
					<Button> </Button><Button> </Button><Button> </Button>
					<Button variant="contained" color="primary" >Simulate</Button>
					<br>
					</br>
				</Grid>

				{/* ----------------------  ALGO-2 ----------------------*/}
				<Grid item>
					<ButtonBase sx={{ width: 390, height: 300 }}>
						<Img alt="complex" src="img.jpg" />
					</ButtonBase>
				</Grid>

				<Grid item xs={12} sm={6}>
					<Grid item xs container direction="column">
						<Grid item xs>
							<Typography variant="subtitle1" component="div" align='center'  color='primary.skyblue'>
								DINING PHILOSOPHER'S ALGORITHM
							</Typography>
						</Grid>
					</Grid>

					<Grid item>
						<Typography variant="block" align="left" color="orange">
							The dining philosopher's problem is the classical problem of synchronization which says that Five philosophers are sitting around a circular table and their job is to think and eat alternatively   .....
						</Typography>
					</Grid>
					<Button variant="contained" color="secondary">More Info</Button>
					<Button> </Button><Button> </Button><Button> </Button>
					<Button variant="contained" color="primary" >Simulate</Button>

				</Grid>


				{/*  ----------------   ALGO-3  --------------- */}

				<Grid item alignContent={'right'}>
					<ButtonBase sx={{ width: 400, height: 300 }}>
						<Img alt="complex" src="third.jpg" />
					</ButtonBase>

				</Grid>
				<Grid item xs={12} sm={6}>
					<Grid item xs container direction="column">
						<Grid item xs>
							<Typography variant="subtitle1" component="div" align='center' color='primary.skyblue'>
								C-LOOK DISK ALGORITHM
							</Typography>
						</Grid>
					</Grid>

					<Grid item>
						<Typography variant="block" align="left" color="orange">
						C-LOOK is an enhanced version of both SCAN as well as LOOK disk scheduling algorithms. This algorithm also uses the idea of wrapping the tracks as a circular cylinder as C-SCAN algorithm but the seek time is better than C-SCAN algorithm .....

						</Typography>
					</Grid>
					<Button variant="contained" color="secondary" >More Info</Button>
					<Button > </Button><Button> </Button><Button> </Button>
					<Button variant="contained" color="primary">Simulate</Button>

				</Grid>
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
						<Grid item xs={12} sm={6}
							sx={{

								alignContent: "center",
								alignItems: "center"
							}}>

							<ProjectCard project={project} >

							</ProjectCard>

						</Grid>
					);
				})}
			</Grid>
		</Grid >
	);
};

export default AppLayout;
