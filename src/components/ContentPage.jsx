import React from 'react';
import { Button, Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { ArtistsPage } from './content/ArtistsPage';
import { AlbumSingerPage } from './content/AlbumSingerPage';
import { RadioPage } from './content/RadioPage';
import { CompanyDescription } from './content/CompanyDescription';

export const ContentPage = () => {
	return (
		<StyledBox sx={{ flexGrow: 1 }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<ArtistsPage />
				</Grid>
				<Grid item xs={12}>
					<AlbumSingerPage />
				</Grid>
				<Grid item xs={12}>
					<RadioPage />
				</Grid>
				<Grid item xs={12}>
					<CompanyDescription />
				</Grid>
			</Grid>
		</StyledBox>
	)
}

const StyledBox = styled(Box)({
	display: 'flex',
	height: '440px',
	flexDirection: 'column',
	padding: '10px',
	borderRadius: '10px',
	marginTop: '80px',
	marginBottom: '0px',
	background: '#121212',
	color: 'white',
	overflowY: 'auto',
	scrollbarWidth: 'thin',
	scrollbarColor: 'transparent transparent',
	'@media (min-width: 300px) and (max-width: 800px)': {
		height: 'auto',
		marginTop: '50px',
	}
});