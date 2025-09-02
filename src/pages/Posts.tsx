import {
  Window,
  WindowHeader,
  WindowContent,
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableDataCell,
} from "react95";
import styled from "styled-components";
import PostLink from "../components/PostLink";

const TableDataCellCenter = styled(TableDataCell)`
  text-align: center;
`;

const TableRowClickable = styled(TableRow)`
  cursor: pointer;
`;

export default function Posts() {
  return (
    <>
      <Window style={{ width: "50%", display: "block", margin: "auto", marginTop: "2rem" }}>
        <WindowHeader>Posts</WindowHeader>
        <WindowContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell style={{ width: "75%" }}>Title</TableHeadCell>
                <TableHeadCell>Date</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <PostLink title={"exploring euler's number"} date={"03/09/2025"} path="/about" />
            </TableBody>
          </Table>
        </WindowContent>
      </Window>
    </>
  );
}
