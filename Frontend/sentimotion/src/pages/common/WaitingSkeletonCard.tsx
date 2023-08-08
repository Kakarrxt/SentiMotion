import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';


export default function WaitingSkeletonCard() {

    const countArr = [1, 3, 2, 2, 4];

    return (
        <Grid container direction="row" spacing={1} sx={{ ml: 0 }}>
            {countArr.map((n, index) => 
                <Grid key={`skeleton_${index}`} item xs={n}>
                    <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
                </Grid>
            )}
        </Grid>
    );
}

