import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
	return (
		<div>
			<Paper
				component="form"
				sx={{ position: 'fixed', top: '10px', m: '5px', p: '2px 4px', display: 'flex', alignItems: 'center', width: 'calc(100% - 10px)' }}>
				<InputBase sx={{ ml: 1, flex: 1 }} placeholder="관광지 주소 검색" inputProps={{ 'aria-label': 'search Utourpia maps' }} />
				<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
					<SearchIcon />
				</IconButton>
			</Paper>
		</div>
	);
}
