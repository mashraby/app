import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  console.log(value);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        position: "fixed",
        bottom: "0",
        left: "0",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          href="counter-page"
          label="Pray Times"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          component={Link}
          href="a-page"
          label="Tasbeh"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          component={Link}
          href="/b-page"
          label="Nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          component={Link}
          href="/c-page"
          label="Nearby"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
