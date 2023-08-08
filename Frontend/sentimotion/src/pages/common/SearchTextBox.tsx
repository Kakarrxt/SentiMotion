
import SearchIcon from '@mui/icons-material/Search';
import { Box, BoxProps, InputAdornment, styled } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useTranslation } from 'react-i18next';


const StyledBox= styled(Box)<BoxProps>(({theme}) => ({
    width: 250,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    '& svg': {
        color: theme.palette.grey[400]
    }
  }));



interface SearchTextBox{
    handleChange :any;
}
export default function SearchTextBox(props:SearchTextBox) {

    const [t] = useTranslation();
    const { handleChange } = props;

    return (
        <StyledBox>
        <TextField
            id="search-request"
            variant="outlined"
            size="small"
            placeholder={"search"}
            onChange={(e) => handleChange(e.target.value)}
            autoComplete="off"
            InputProps={{
                startAdornment:
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>,
            }}
        />
        </StyledBox>
    );
};