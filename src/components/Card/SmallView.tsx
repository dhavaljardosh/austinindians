import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function SmallView({ data, headers }: any) {
  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: 8 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data[headers[3]]}
        </Typography>
        <Typography variant="h5" component="div">
          {data[headers[0]]}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {data[headers[1]]}
        </Typography>
        <Typography variant="body2">{data[headers[2]]}</Typography>
      </CardContent>
      <CardActions>
        {data[headers[6]] && (
          <Button
            size="small"
            href={data[headers[6]]}
            rel="noopener noreferrer"
            target="__blank"
          >
            Learn More
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
