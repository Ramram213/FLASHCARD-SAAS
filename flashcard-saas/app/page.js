import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Grid, Toolbar, Typography, } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth = "lg">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text"></meta>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color="inherit" href="/sign-in">Login</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      <Box sx={{textAlign: 'center', my: 4}}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Flashcard SaaS
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          The easiest way to create flashcards from your text.
        </Typography>
        <Button variant="contained" color="primary" sx={{mt: 2, mr: 2}} href="/generate">
          Get Started
        </Button>
        <Button variant="outlined" color="primary" sx={{mt: 2}}>
          Learn More
        </Button>
      </Box>

      <Box sx={{my: 6}}>
        <Typography variant="h4" component="h2" gutterBottom>Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom> Easy Text Input</Typography>
            <Typography>
              {' '}
              Simply input the text and let the software do the rest. Createing 
              flashcards has never been easier
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom> Smart Flashcards</Typography>
            <Typography>
              {' '}
              Our AI inrelligently breaks down your text into concise
              flashcards. perfect for studying
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom> Accessible Anywhere</Typography>
            <Typography>
              {' '}
              Access your flashcards from any device.at any time. Study on the go with ease.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2}}>
              <Typography variant="h5" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h6" gutterBottom>
                $5 / month
              </Typography>
              <Typography>
              {' '}
              Access to basic flashcard features and limited storage.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Basic
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2}}>
              <Typography variant="h5" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h6" gutterBottom>
                $10 / month
              </Typography>
              <Typography>
              {' '}
              Unlimited flashcard and storage, with priority support.
              </Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>
                Choose Pro
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </Container>
  )
}