import { Deck,Mail, Notifications } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Toolbar,styled,Typography,alpha, Box,InputBase, Badge, Avatar } from '@mui/material'
import React from 'react'

const StyledTool =styled(Toolbar)(({theme})=>({
    display: 'flex',
    justifyContent:"space-between"
}))
const Icon =styled(Box)(({theme})=>({
    display: 'flex',
    gap:"20px",
   marginLeft:"7%"
}))
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.35),
    },
    
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(100),
      width: 'auto'},
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(12),
        width: 'auto',
    },
}));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
function Navbar() {
   
  return (
    <AppBar position="sticky">
        <StyledTool >
            <Toolbar >
        <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}> BesDev</Typography> 
        <Deck  fontSize="large" sx={{display:{xs:"block",sm:"none"}}} />
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
        <Icon>
            <Badge badgeContent={4} color='error'>
                <Mail />
            </Badge>
            <Badge badgeContent={4} color='error'>
                <Notifications />
            </Badge>
            <Avatar sx={{width:30,height:30}} src=''/>
    
    
    
        </Icon>
            </Toolbar>
        </StyledTool>
            
    </AppBar>
  )
}







export default Navbar;
