import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import * as React from 'react';

type Props = {
	handleChange: (event: React.ChangeEvent<unknown>, value: number) => void
};

const MyPagination: React.FC<Props> = ({ handleChange }) => {
	return (
		<Stack spacing={2}>
			<Pagination
				count={10}
				size="large"
				renderItem={(item) => (
					<PaginationItem
						slots={{
							previous: ArrowBackIcon,
							next: ArrowForwardIcon,
						}}
						{...item}
					/>
				)}
				onChange={handleChange}
			/>
		</Stack>
	);
};

export default MyPagination;
