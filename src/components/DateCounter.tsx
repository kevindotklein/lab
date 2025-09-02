import { useEffect, useState } from "react";
import { Counter, Window, WindowContent, WindowHeader } from "react95";

export default function DateCounter() {
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    const today = new Date();
    setDay(today.getDate());
    setMonth(today.getMonth()+1);
    setYear(today.getFullYear());
  }, []);

  return (
    <Window
      className="window"
      style={{
        position: "fixed",
        top: "35%",
        right: "7%",
        transform: "translateY(-50%)",
      }}
    >
      <WindowHeader className="window-title">
        <span style={{ marginLeft: "0.5rem" }}>Date (dd-mm-yyyy)</span>
      </WindowHeader>
      <WindowContent>
        <Counter value={day} minLength={2} size="md" />
        <Counter value={month} minLength={2} size="md" />
        <Counter value={year} minLength={4} size="md" />
      </WindowContent>
    </Window>
  );
}
