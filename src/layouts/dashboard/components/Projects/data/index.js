// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftProgress from "components/SoftProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <SoftAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "company name", align: "left" },
      { name: "created", align: "left" },
      { name: "requirement", align: "center" },
      { name: "funded amount", align: "center" },
      { name: "type", align: "center" },
      { name: "status", align: "center" },
      { name: "funding manager", align: "center" },
    ],

    rows: [
      {
        "company name": (
          <SoftTypography sx={{ paddingLeft: '16px' }} variant="h6" color="text" fontWeight="medium">
            Sazzad Tech
          </SoftTypography>
        ),
        "created": (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            12/07/2023
          </SoftTypography>
        ),
        "requirement": (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            unknown
          </SoftTypography>
        ),
        "funded amount": (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </SoftTypography>
        ),
        "type": (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            unknown
          </SoftTypography>
        ),
        "status": (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Active
          </SoftTypography>
        ),
        "funding manager": (
          <SoftTypography variant="caption" color="text" fontWeight="medium">
            Bruce Wayne
          </SoftTypography>
        ),
      },
      
    ],
  };
}
