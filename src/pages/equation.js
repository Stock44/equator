import * as React from "react";
import Layout from "../components/layout";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Grid,
  Box,
  Stack,
  List,
  ListItem,
  Container, Link
} from "@mui/material";
import ScrollLink from "../components/ScrollLink";
import TextFit from "@tomplum/react-textfit";
import StyledTeX from "../components/StyledTeX";
import { active } from "./equation.module.css";

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
          <TextFit mode="single" max={48}>
            <StyledTeX math="x = a_0 + \cfrac{1}{a_1
          + \cfrac{1}{a_2
          + \cfrac{1}{a_3 + \cfrac{1}{a_4} } } }" sx={{
              textAlign: "center",
              display: "block",
              my: 6
            }} />
          </TextFit>
        </Container>
        <Grid container spacing={8}>
          <Grid item xs={12} lg={9}>
            <Stack>
              <div id="hello">
                <Typography variant="h">Newton's Second
                  Law</Typography>
                <Typography gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque hendrerit tellus at libero posuere, ut suscipit lectus
                  consequat. Etiam rhoncus nunc tincidunt, lacinia neque id,
                  auctor
                  ex. Sed elementum sagittis dui a tempus. Phasellus ornare
                  gravida
                  lectus, ut tincidunt libero volutpat id. Nam venenatis diam ut
                  sagittis viverra. Vestibulum in rhoncus nibh. Proin sed orci
                  id
                  ante fermentum ullamcorper. Sed pellentesque nisl eu dignissim
                  vestibulum. Nunc eu tincidunt nunc, et varius sem. Nunc at
                  gravida
                  turpis. Vestibulum tortor purus, dignissim ac ante eu, cursus
                  bibendum dolor. Praesent laoreet turpis non erat malesuada, at
                  mollis risus pharetra. In vel ullamcorper mi, ut consequat
                  leo.
                  Donec in aliquam sapien. Vestibulum a egestas risus.
                </Typography>
              </div>
              <div id="oxschool">
                <Typography variant="sh" id="oxschool">
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
              </div>
              <div id="goodbye">
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
              </div>
              <div id="winter">
                <Typography variant="sh" id="winter">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  feugiat finibus dui et consectetur. Suspendisse vitae ornare
                  nulla. Mauris consectetur accumsan sem, a dapibus metus
                  consectetur eu. Maecenas id purus sit amet sem pharetra
                  tincidunt ac eget est. Aenean at finibus quam, id iaculis dolor.
                  Ut interdum dolor at posuere feugiat. Integer in elit eleifend,
                  eleifend orci ut, imperdiet tortor. Sed et erat non ipsum
                  venenatis hendrerit. Praesent semper leo fermentum augue
                  condimentum, at viverra erat lacinia.

                  Curabitur nec vestibulum erat. Nullam in mi ipsum. Curabitur
                  congue ex varius tempus egestas. Etiam faucibus vel diam at
                  placerat. Aenean auctor orci mi, non volutpat sem rhoncus ut.
                  Duis bibendum semper efficitur. Sed scelerisque auctor
                  facilisis. Vestibulum bibendum nulla a dictum tincidunt.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Donec lobortis fringilla erat, rutrum sodales dui hendrerit ac.
                  Nunc imperdiet mauris vitae vehicula vestibulum. Quisque quis
                  eros blandit, scelerisque lorem sit amet, pulvinar libero.

                  Mauris purus dolor, cursus eu vestibulum nec, aliquam nec diam.
                  Sed elementum pellentesque orci, vel vulputate erat egestas sit
                  amet. Nunc suscipit sit amet velit eu vestibulum. Aliquam mauris
                  mi, gravida in dolor vitae, auctor laoreet ligula. Nulla
                  facilisi. Aenean et mi ut nisl consequat mollis. Curabitur
                  egestas porttitor lorem at porta. Nunc iaculis lacinia elit, sit
                  amet ultrices orci placerat et.

                  Sed sed lorem egestas, finibus nisi vitae, viverra mauris. Nulla
                  euismod efficitur neque, et dictum odio pulvinar in. Cras
                  facilisis nibh sem, et pharetra est rhoncus a. Nunc mattis
                  mollis semper. Sed sed nibh non magna hendrerit vehicula sed et
                  risus. Phasellus et volutpat massa. Aenean varius felis eu felis
                  convallis sagittis. Phasellus a aliquet odio. Donec dictum massa
                  euismod condimentum tristique. Sed eu egestas metus. Aliquam
                  sodales imperdiet lorem in sagittis. Phasellus commodo massa sit
                  amet ex euismod, vitae vehicula metus vulputate. Sed faucibus
                  justo sed nunc lacinia congue. Sed sit amet dolor elit. Integer
                  semper ligula at arcu molestie elementum. Fusce vulputate lectus
                  augue, vel blandit est tincidunt in.

                  Aenean elementum viverra nulla nec consequat. In eu ex ex. Donec
                  non lacus tristique, malesuada nibh eget, aliquam felis.
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                  posuere cubilia curae; Nullam porttitor dolor eu lectus
                  convallis, eleifend sodales ex dapibus. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Aliquam interdum vel ligula
                  nec volutpat. Morbi tincidunt tortor vitae varius sagittis.
                  Vivamus placerat luctus libero, a scelerisque turpis congue a.
                  Fusce quis finibus massa.
                </Typography>
              </div>
              <Typography variant="sh" id="(s)pain">
                Sed sed lorem egestas, finibus nisi vitae,
              </Typography>
              <Typography>
                Sed sed lorem egestas, finibus nisi vitae, viverra mauris. Nulla
                euismod efficitur neque, et dictum odio pulvinar in. Cras
                facilisis nibh sem, et pharetra est rhoncus a. Nunc mattis
                mollis semper. Sed sed nibh non magna hendrerit vehicula sed et
                risus. Phasellus et volutpat massa. Aenean varius felis eu felis
                convallis sagittis. Phasellus a aliquet odio. Donec dictum massa
                euismod condimentum tristique. Sed eu egestas metus. Aliquam
                sodales imperdiet lorem in sagittis. Phasellus commodo massa sit
                amet ex euismod, vitae vehicula metus vulputate. Sed faucibus
                justo sed nunc lacinia congue. Sed sit amet dolor elit. Integer
                semper ligula at arcu molestie elementum. Fusce vulputate lectus
                augue, vel blandit est tincidunt in.

                Aenean elementum viverra nulla nec consequat. In eu ex ex. Donec
                non lacus tristique, malesuada nibh eget, aliquam felis.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Nullam porttitor dolor eu lectus
                convallis, eleifend sodales ex dapibus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Aliquam interdum vel ligula
                nec volutpat. Morbi tincidunt tortor vitae varius sagittis.
                Vivamus placerat luctus libero, a scelerisque turpis congue a.
                Fusce quis finibus massa.
              </Typography>
            </Stack>
          </Grid>
          <Grid item lg={3} sx={{
            display: {
              md: "block",
              xs: "none"
            }
          }}>
            <Stack sx={{
              mt: 2,
              position: "sticky",
              top: 100
            }}>
              <Typography sx={{
                color: "#808080"
              }} gutterBottom>Contents</Typography>
              <List>
                {
                  ["hello", "oxschool", "goodbye", "winter", "(s)pain"].map(
                    (text) => <ListItem sx={{
                      p: 0,
                      mt: 2
                    }}>
                      <ScrollLink to={text} offset={-64} smooth spy={true}
                                  activeClass={active}>
                        <Link
                          sx={{
                            color: "#808080"
                          }}>{text}</Link>
                      </ScrollLink>
                    </ListItem>)
                }
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </Layout>;
}

export default EquationPage;
