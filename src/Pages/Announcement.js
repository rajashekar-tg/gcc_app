import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Select, MenuItem } from "@mui/material";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Autocomplete from "@mui/material/Autocomplete";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
const columns = [
  {
    id: "title",
    label: (
      <label style={{ color: "#000000", fontWeight: "bold" }}>Title</label>
    ),
    align: "center",
    // minWidth: 170
  },

  {
    id: "fromDate",
    label: (
      <label style={{ color: "#000000", fontWeight: "bold" }}>From Date</label>
    ),
    // minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "toDate",
    label: (
      <label style={{ color: "#000000", fontWeight: "bold" }}>To Date</label>
    ),
    // minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "audience",
    label: (
      <label style={{ color: "#000000", fontWeight: "bold" }}>Audience</label>
    ),
    // minWidth: 170,
    align: "center",
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "description",
    label: (
      <label style={{ color: "#000000", fontWeight: "bold" }}>
        Description
      </label>
    ),
    // minWidth: 170,
    align: "center",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: (
      <label style={{ color: "#000000", fontWeight: "bold" }}>Action</label>
    ),
    // minWidt...
  },
  // Add other columns as neede
];
function createData(title, fromDate, toDate, audience, description, action) {
  return { title, fromDate, toDate, audience, description, action };
}

const rows = [
  createData(
    "3rd Anniversary",
    "12-31-2021",
    "01-30-2021",
    "yale-BAIPortal,YaleEpicAutomation",
    "Holidays",
    <span>
      <button className="btn btn-outline-primary btn-sm">Edit</button>
      <span
        style={{
          borderLeft: "2px solid gray",
          padding: "7px",
          marginLeft: "12px",
        }}
      ></span>
      <button className="btn btn-outline-primary btn-sm">Deactivate</button>
      <span
        style={{
          borderLeft: "2px solid gray",
          padding: "7px",
          marginLeft: "12px",
        }}
      ></span>
      <button className="btn btn-outline-primary btn-sm">Delete</button>
    </span>
  ),
  createData(
    "demo",
    "03-31-2022",
    "03-31-2022",
    "correspondence ",
    "Cashier",
    <span>
      <button className="btn btn-outline-primary btn-sm">Edit</button>
      <span
        style={{
          borderLeft: "2px solid gray",
          padding: "7px",
          marginLeft: "12px",
        }}
      ></span>
      <button className="btn btn-outline-primary btn-sm">Deactivate</button>
      <span
        style={{
          borderLeft: "2px solid gray",
          padding: "7px",
          marginLeft: "12px",
        }}
      ></span>
      <button className="btn btn-outline-primary btn-sm">Delete</button>
    </span>
  ),
  createData(
    "demo",
    "03-31-2022",
    "03-31-2022",
    "Epic ",
    "cashier",
    <span>
      <button className="btn btn-outline-primary btn-sm">Edit</button>
      <span
        style={{
          borderLeft: "2px solid gray",
          padding: "7px",
          marginLeft: "12px",
        }}
      ></span>
      <button className="btn btn-outline-primary btn-sm">Deactivate</button>
      <span
        style={{
          borderLeft: "2px solid gray",
          padding: "7px",
          marginLeft: "12px",
        }}
      ></span>
      <button className="btn btn-outline-primary btn-sm">Delete</button>
    </span>
  ),
  createData(
    "Development",
    "07-31-2022",
    "07-31-2022",
    " Accomdation ",
    "some changes needed to develop",
    <span>
      <button className="btn btn-outline-primary btn-sm">Edit</button>
      <span
        style={{
          borderLeft: "2px solid gray",
          padding: "7px",
          marginLeft: "12px",
        }}
      ></span>
      <button className="btn btn-outline-primary btn-sm">Deactivate</button>
      <span
        style={{
          borderLeft: "2px solid gray",
          padding: "7px",
          marginLeft: "12px",
        }}
      ></span>
      <button className="btn btn-outline-primary btn-sm">Delete</button>
    </span>
  ),
];
export default function Announcement() {
  const [selectedValue, setSelectedValue] = useState("");
  const [description, setDescription] = useState("");

  const options = [
    { value: "Mindpath-cashManagement", label: "Mindpath-cashManagement" },
    { value: "Innclique-eyt", label: "Innclique-eyt" },
    { value: "Mercy-Denials", label: "Mercy-Denials" },
    { value: "ABCHealth-EpicAutomation", label: "ABCHealth-EpicAutomation" },
    { value: "ABCHealth-Correspondace", label: "ABCHealth-Correspondace" },
    { value: "Yale-BAIPortal", label: "Yale-BAIPortal" },
    { value: "Yale-Correspondace", label: "Yale-Correspondace" },
    { value: "Yale-EpicAutomation", label: "Yale-EpicAutomation" },
    { value: "Yale-Workforce", label: "Yale-Workforce" },
    { value: "Yale-CashPosting", label: "Yale-CashPosting" },
    { value: "Yale-EV", label: "Yale-EV" },
    { value: "WellStreet-WellStreet", label: "WellStreet-WellStreet" },
    { value: "Quality-census", label: "Quality-census" },
    { value: "Quality-nri", label: "Quality-nri" },
    { value: "Quality-ev", label: "Quality-ev" },
  ];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  //table

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <div role="presentation" style={{ margin: "20px" }}>
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
            to="/users/announcements"
          >
            Announcements
          </Link>
        </Breadcrumbs>
      </div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        Validate
        autoComplete="on"
      >
        <Grid container>
          <Grid item xs={6}>
            <FormControl
              variant="standard"
              sx={{ width: 500, marginTop: "50px" }}
            >
              <TextField id="title" name="title" label="Title*" />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl sx={{ width: 600 }} style={{ marginTop: "20px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DateRangePicker"]}
                  sx={{ display: "flex" }}
                >
                  <DemoItem label="Date Range" component="DateRangePicker">
                    <DateRangePicker
                      localeText={{ start: "From", end: "To" }}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl sx={{ width: 500 }} style={{ marginTop: "20px" }}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Audience" />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <FormControl
              variant="standard"
              sx={{ width: 500, marginTop: "25px" }}
            >
              <TextField
                id="Announcements Descriptions"
                name="Announcements Descriptions"
                label="Announcements Descriptions*"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <div style={{ float: "right" }}>
          <Grid container spacing={2} alignItems="center" />
          <Grid item>
            <Grid item>
              <TextField
                variant="outlined"
                placeholder="Search"
                size="small"
                sx={{ width: 400, margin: "20px" }}
              />
              <Button variant="contained" sx={{ backgroundColor: "#ff3d00" }}>
                Save
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ff3d00", margin: "20px" }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Box>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow sx={{ alignItems: "center" }}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "rgb(249,249,249)",
                        alignItems: "center",
                      }}
                    >
                      {column.label}
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
                        sx={{ alignItems: "center" }}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
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
      </Box>
    </div>
  );
}
