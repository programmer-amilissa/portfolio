import { Box, Card, CardContent, Typography } from "@mui/material";

function MuiCard() {
  return (<>
    <Box width="300px">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Fun Fact about Cats
          </Typography>
          <Typography variant="body2" component="div">
            Cats are one of, if not the most, popular pet in the world.
          </Typography>
        </CardContent>
      </Card>
    </Box>
    <Box width="300px">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Girlfriend ni Ida.
          </Typography>
          <Typography variant="body2" component="div">
            I love you! Yieeee
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </>);
}

export default MuiCard;
