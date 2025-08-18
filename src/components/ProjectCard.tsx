import type { ReactNode } from "react";
import { Window, WindowHeader, WindowContent, Frame } from "react95";

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
  footer?: boolean;
  footerMsg?: string;
}

export default function ProjectCard({
  title,
  children,
  footer,
  footerMsg,
}: Props) {
  return (
    <>
      <Window className="window" style={{ minWidth: "50%" }}>
        <WindowHeader className="window-title">
          <span style={{ marginLeft: "0.5rem" }}>{title}</span>
        </WindowHeader>
        <WindowContent>{children}</WindowContent>
        {footer && (
          <Frame variant="well" className="footer" style={{ width: "100%" }}>
            {footerMsg}
          </Frame>
        )}
      </Window>
    </>
  );
}
