import {
  Window,
  WindowContent,
  GroupBox,
  Avatar,
  Button,
  Separator,
} from "react95";
import pfp from "../assets/images/pfp.jpeg";
import type { CSSProperties } from "styled-components";

export default function ProfileCard() {
  const pfpWrapperStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
    fontWeight: "bold",
  };

  return (
    <Window style={{ position: 'fixed', top: "35%", left: "3%", transform: "translateY(-50%)" }}>
      <WindowContent>
        <GroupBox label="About me">
          <section style={pfpWrapperStyle}>
            <Avatar size={50} src={pfp} />
            <span>Kevin Klein</span>
          </section>
          <section style={{ display: "flex", flexDirection: "column", gap: "0.50rem", marginTop: "0.75rem", }}>
            <Button onClick={() => window.open("https://github.com/kevindotklein", "_blank", "noopener,noreferrer")}>
              Github
            </Button>
            <Separator />
            <Button onClick={
              () => window.open("https://www.linkedin.com/in/kevin-klein-172515209/", "_blank", "noopener,noreferrer")
            }>
              Linkedin
            </Button>
          </section>
        </GroupBox>
      </WindowContent>
    </Window>
  );
}
