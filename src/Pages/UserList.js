import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import PermanentDrawer from "./PermenentDrawer";
const columns = [
  { id: "userName", label: "User Name", minWidth: 170 },
  { id: "customerName", label: "Customer Name", minWidth: 100 },
  {
    id: "displayName",
    label: "Display Name",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "createdDate",
    label: "Created Date",
    minWidth: 200,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "lastLogin",
    label: "Last Login",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  userName,
  customerName,
  displayName,
  createdDate,
  lastLogin,
  action
) {
  // const density = population / size;
  return {
    userName,
    customerName,
    displayName,
    createdDate,
    lastLogin,
    action,
  };
}

const rows = [
  createData(
    "Susan",
    "Susan S",
    1324171354,
    3287263,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "China",
    "CN",
    1403500365,
    9596961,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "Italy",
    "IT",
    60483973,
    301340,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "United States",
    "US",
    327167434,
    9833520,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">click</button>
  ),
  createData(
    "Canada",
    "CA",
    37602103,
    9984670,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "Australia",
    "AU",
    25475400,
    7692024,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "Germany",
    "DE",
    83019200,
    357578,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "Ireland",
    "IE",
    4857000,
    70273,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "Mexico",
    "MX",
    126577691,
    1972550,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "Japan",
    "JP",
    126317000,
    377973,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "France",
    "FR",
    67022000,
    640679,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "United Kingdom",
    "GB",
    67545757,
    242495,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "Russia",
    "RU",
    146793744,
    17098246,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "Nigeria",
    "NG",
    200962417,
    923768,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
  createData(
    "Brazil",
    "BR",
    210147125,
    8515767,
    "12-87-2022",
    <button className="btn btn-outline-danger btn-sm">Click</button>
  ),
];

export default function UserList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [searchText, setSearchText] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div role="presentation">
          <Breadcrumbs
            aria-label="breadcrumb"
            separator="›"
            sx={{ fontSize: "15px", fontWeight: "bold" }}
          >
            <Link
              style={{ textDecoration: "none", color: "#9370DB" }}
              to="/users"
            >
              Home
            </Link>
            <Link
              color="primary"
              style={{ textDecoration: "none" }}
              aria-current="page"
              to="/users/listuser"
            >
              UserList
            </Link>
          </Breadcrumbs>
        </div>
        <div style={{ float: "right", marginBottom: "30px" }}>
          <>
            <div>
              <TextField
                label="Search"
                value={searchText}
                onChange={handleSearchChange}
                variant="outlined"
                size="small"
                InputProps={{
                  startAdornment: (
                    <endAdornment>
                      <SearchIcon />
                    </endAdornment>
                  ),
                }}
              />
              <Link
                to="/users/createuser"
                style={{ marginRight: "70px", marginLeft: "10px" }}
              >
                <button className="btn btn-outline-danger ">Create User</button>
              </Link>
            </div>
          </>
        </div>
      </div>

      <Paper sx={{ width: "95%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{ py: 2 }}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <strong>{column.label}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ py: 0.5 }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <PermanentDrawer />
    </>
  );
}
