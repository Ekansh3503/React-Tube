import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={0.5}
    sx={{
      position: "sticky",
      background: "#000000",
      top: 0,
      justifyContent: "space-between",
      flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
      gap: { xs: 2, sm: 0 }, // Add gap between items on small screens
      zIndex: 1000,
    }}
  >
    {/* yt logo with hyperlink */}
    <Link to="/" style={{ display: "flex", alignItems: "center", textAlign: { xs: "center", sm: "left" } }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        sx={{
          fontSize: { xs: "20px", sm: "25px" }, // Smaller font size for mobile
          fontWeight: 500,
          color: "white",
          margin: { xs: "10px", sm: "15px" }, // Adjust margin for smaller screens
        }}
      >
        React-Tube
      </Typography>
    </Link>
    <SearchBar
      sx={{
        width: { xs: "100%", sm: "auto" }, // Full width on small screens
        marginTop: { xs: "10px", sm: "0" }, // Add margin to separate on small screens
      }}
    />
  </Stack>
);

export default Navbar;

