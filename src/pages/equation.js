import * as React from "react";
import Layout from "../components/layout";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Grid,
  Box, Stack, List, ListItem, Container
} from "@mui/material";
import StyledTeX from "../components/StyledTeX";

function EquationPage() {
  return <Layout>
    <AppBar elevation={0} position="sticky">
      <Toolbar>
        <TextField sx={{
          mx: "auto",
          width: 200
        }} />
      </Toolbar>
    </AppBar>
    <Container maxWidth="lg">
      <Stack>
        <Container>
          <StyledTeX math="y=mx+b" sx={{
            fontSize: "8vw",
            textAlign: "center",
            display: "block",
            my: 8
          }} />
        </Container>
        <Grid container spacing={8}>
          <Grid item xs={12} lg={9}>
            <Stack>
              <Typography variant="h">Newton's Second Law</Typography>
              <Typography gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque hendrerit tellus at libero posuere, ut suscipit lectus
                consequat. Etiam rhoncus nunc tincidunt, lacinia neque id,
                auctor
                ex. Sed elementum sagittis dui a tempus. Phasellus ornare
                gravida
                lectus, ut tincidunt libero volutpat id. Nam venenatis diam ut
                sagittis viverra. Vestibulum in rhoncus nibh. Proin sed orci id
                ante fermentum ullamcorper. Sed pellentesque nisl eu dignissim
                vestibulum. Nunc eu tincidunt nunc, et varius sem. Nunc at
                gravida
                turpis. Vestibulum tortor purus, dignissim ac ante eu, cursus
                bibendum dolor. Praesent laoreet turpis non erat malesuada, at
                mollis risus pharetra. In vel ullamcorper mi, ut consequat leo.
                Donec in aliquam sapien. Vestibulum a egestas risus.
              </Typography>
              <Typography variant="sh">
                Pellentesque ornare nisi vel molestie commodo.
              </Typography>
              <Typography gutterBottom>
                Fusce malesuada sodales rhoncus. Proin accumsan quam vitae
                tellus lobortis, sit
                amet vehicula nisl aliquam. Morbi feugiat iaculis tellus, in
                mattis orci laoreet in. Donec quis eros velit. Pellentesque sit
                amet odio lorem. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Nunc tempor bibendum velit at efficitur.
                Pellentesque consequat ante vel lorem feugiat blandit. Integer
                nec
                neque imperdiet odio scelerisque ornare vel vehicula felis. Cras
                nisi massa, dictum non risus ac, cursus iaculis magna. Vivamus
                quis finibus sapien. Quisque at sapien posuere, dictum diam non,
                convallis lacus. Maecenas libero sem, pulvinar in sem in,
                lobortis
                mattis diam. Phasellus tincidunt sed eros sed rutrum. Ut non
                porttitor mi, sed tincidunt est.
              </Typography>
              <Typography variant="sh">
                Mauris porta eros vel risus volutpat.
              </Typography>
              <Typography>
                Sit amet posuere magna
                ultrices. Sed eu nisi nec tellus congue laoreet feugiat sit amet
                massa. Pellentesque dignissim felis ut est iaculis, ut iaculis
                libero faucibus. Nunc quis bibendum ante. Nam porta arcu ut
                posuere sollicitudin. Phasellus leo libero, feugiat eget gravida
                in, pharetra ac diam. Fusce et congue tellus. Pellentesque
                fermentum sed mauris vel vestibulum. Proin est enim, facilisis
                ac
                metus nec, efficitur sollicitudin massa. Integer quis semper
                magna. Maecenas vitae lorem augue. Maecenas tincidunt erat quis
                turpis dictum feugiat. In faucibus dictum interdum.
              </Typography>
              <Typography variant="sh">
                Proin rutrum tempor magna.
              </Typography>
              <Typography>
                Sit amet rutrum leo venenatis at.
                Morbi
                orci arcu, venenatis lobortis vehicula sollicitudin, molestie at
                enim. Vivamus id lobortis tortor, eu euismod ipsum. Maecenas
                magna
                magna, elementum id rutrum vel, sollicitudin vitae lectus.
                Maecenas congue nisi at tortor suscipit, ac ornare mi congue.
                Maecenas tellus quam, condimentum et est sit amet, bibendum
                congue
                lacus. Nullam tristique odio id lacus molestie, a volutpat
                turpis
                varius.

                Vivamus pulvinar sagittis enim sed consequat. Integer feugiat
                libero sed dolor congue commodo. Maecenas varius mattis ligula,
                non vestibulum orci mattis vehicula. In hac habitasse platea
                dictumst. Ut gravida blandit consectetur. Ut non augue purus.
                Vestibulum et pretium risus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos
                himenaeos.
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={3} sx={{
            display: {
              md: 'block',
              xs: 'none',
            }
          }}>
            <Typography variant="h6" sx={{
              mt: 2,
              position: "sticky",
              top: 100
            }}>Contents</Typography>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </Layout>;
}

export default EquationPage;
