import { TableDataCell, TableRow } from "react95";
import { styled } from "styled-components";

interface Props {
  title: string;
  date: string;
  path: string;
}

export default function PostLink({ title, date, path }: Props) {
  const TableDataCellCenter = styled(TableDataCell)`
    text-align: center;
  `;

  const TableRowClickable = styled(TableRow)`
    cursor: pointer;
  `;

  return (
    <>
      <TableRowClickable onClick={() => window.open(path, "_self")}>
        <TableDataCellCenter>
          <span style={{ fontSize: "1.1rem" }}>{title}</span>
        </TableDataCellCenter>
        <TableDataCell>{date}</TableDataCell>
      </TableRowClickable>
    </>
  );
}
