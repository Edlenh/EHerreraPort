import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.style.css'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      <Link href="https://www.instagram.com/edlenherrera" target="_blank" rel="noopener noreferrer" style={{ marginLeft : 10 }}>
      <InstagramIcon className='icons' />
      </Link>
      <Link href="https://www.linkedin.com/in/edward-herrera-0a2310262/"  target="_blank" rel="noopener noreferrer" style={{marginLeft : 10 }}>
      <LinkedInIcon className='icons'/>
      </Link>
      <Link href="https://github.com/Edlenh"  target="_blank" rel="noopener noreferrer" style={{marginLeft : 10, marginRight: 30 }}>
      <GitHubIcon className='icons'/>
      </Link>
      {'Copyright © '}
        EdwardHerrera
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        marginTop: '-575px'
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 10,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
