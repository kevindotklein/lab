import { Window, WindowHeader, WindowContent } from "react95";
import { styled, type CSSProperties } from "styled-components";

export default function About() {
  const aboutWrapper: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    marginTop: "2.5rem",
    gap: "2rem",
  };

  const PAbout = styled.p`
    font-size: 1.2rem;
  `;

  return (
    <div style={aboutWrapper}>
      <Window className="window" style={{ minWidth: "50%", margin: "" }}>
        <WindowHeader className="window-title">
          <span style={{ marginLeft: "0.5rem" }}>About Me</span>
        </WindowHeader>
        <WindowContent>
          <h2>Hi,</h2>
          <PAbout>
            i'm <u>Kevin Klein</u>,
          </PAbout>
          <PAbout>
            fullstack developer, passionate about functional languages, low
            level, eletronics, physics and math
          </PAbout>
          <PAbout>
            get in touch through any socials (buttons in card) or email:{"  "}
            <span style={{ color: "blue" }}>kevindotklein@gmail.com</span>
          </PAbout>
          <br />
          <ul>
            <li>
              <PAbout>
                i'm currently an electronic engineering student at IFSP - 🤖
              </PAbout>
            </li>
            <li>
              <PAbout>fav pokemon: electrode</PAbout>
            </li>
            <li>
              <PAbout>fav movie: star wars - revenge of the sith</PAbout>
            </li>
          </ul>
        </WindowContent>
      </Window>
    </div>
  );
}
