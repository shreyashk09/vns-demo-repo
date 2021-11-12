import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import VerifiedIcon from "@mui/icons-material/Verified";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { Checkbox, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { pink } from "@mui/material/colors";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Avatar from "@mui/material/Avatar";
import { Button } from "reactstrap";
import EditIcon from "@mui/icons-material/Edit";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Cupcake", 305, 3.7),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
  createData("Honeycomb", 408, 3.2),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Jelly Bean", 375, 0.0),
  createData("KitKat", 518, 26.0),
  createData("Lollipop", 392, 0.2),
  createData("Marshmallow", 318, 0),
  createData("Nougat", 360, 19.0),
  createData("Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));
const Inventory = () => {
  const [value, setValue] = React.useState(30);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rows);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: "#023047",
      fontWeight: 700,
      fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
      backgroundColor: "#F3F3F3",
    },
  }));
  const [value2, setValue2] = React.useState(new Date());
  return (
    <div style={{ background: "white" }}>
      <div style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15, background: "#023047" }}>
        <p className="text-center" style={{ color: "white" }}>
          Inventory Planning
        </p>
      </div>
      <div>
        <Stack spacing={4}>
          <TableContainer style={{height:600}} component={Paper}>
            <Table sx={{ Width: 940 }} aria-label="custom pagination table">
              <TableHead>
                <TableRow>
                  <StyledTableCell >ITEM NAME</StyledTableCell>
                  <StyledTableCell align="center">ITEM ID #</StyledTableCell>
                  <StyledTableCell align="center"> QTY</StyledTableCell>
                  <StyledTableCell style={{ width: 200 }} align="center">
                    PREDICTED <br />
                    QTY RANGE
                  </StyledTableCell>
                  <StyledTableCell align="center">SELECTED QTY</StyledTableCell>
                  <StyledTableCell align="center">ORDER QTY</StyledTableCell>
                  <StyledTableCell align="center">
                    SELECT{" "}
                    <Checkbox
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
                ).map((row) => (
                  <TableRow key={row.name}>
                      <StyledTableCell
                        style={{ fontWeight: 700, fontSize: 16 }}
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">#211256_CUP_T3D2</StyledTableCell>
                      <StyledTableCell align="center">{row.fat}</StyledTableCell>
                      <StyledTableCell align="center">27 - 37</StyledTableCell>
                      <StyledTableCell align="center">
                        <TextField
                          id="outlined-basic"
                          size="small"
                          label="Select"
                          value={value}
                          sx={{
                            "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":{
                              height:"auto",
                              background:"white",

                            }
                          }}
                          onChange={handleInputChange}
                          inputProps={{
                            step: 1,
                            min: 0,
                            type: "number",
                            "aria-labelledby": "input-slider",
                            
                          }}
                        />
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.fat}</StyledTableCell>
                      <StyledTableCell align="center">
                        <Checkbox
                        /* checked={status} */
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      </StyledTableCell>
                    </TableRow>
                ))}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <div>
              <Stack direction="row" style={{ width: 700, marginTop: 10 }}>
                <TablePagination
                  style={{ marginLeft: 200 }}
                  rowsPerPageOptions={[{ label: "All", value: -1 },6, 12, 24, ]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  sx={{
                    "& .MuiTablePagination-displayedRows":{
                      marginTop:2,

                    }, 
                    "& .MuiTablePagination-selectLabel":{
                      marginTop:2,

                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </Stack>
              </div>
          </TableContainer>

          
          
          <Stack direction="row" spacing={9}>
            <p
              style={{ color: "#05b0fa", fontweight: 400, fontSize: 20, width: 100 }}
              label="Region"
            >
              Due Date<span style={{ color: "red" }}>*</span>
            </p>
            <div style={{ marginLeft: 20 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={value2}
                  onChange={(newValue) => {
                    setValue2(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField style={{ width: 300 }} {...params} label="Select Date" size="small" />
                  )}
                />
              </LocalizationProvider>
            </div>
          </Stack>
          <div style={{ marginBottom: 20 }}>
            <p
              style={{ color: "#05b0fa", fontweight: "bold", fontSize: 20, width: 67 }}
              label="Region"
            >
              Remarks
            </p>
            <Stack spacing={3}>
          <Stack direction="row" spacing={1}>
            <div style={{ backgroundColor: "#CCCCCC", borderRadius: 10, width: 6 }}></div>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1}>
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Remy Sharp"
                  src="https://cdn2.iconfinder.com/data/icons/business-and-finance-related-hand-gestures/256/face_female_blank_user_avatar_mannequin-512.png"
                />
                <p style={{ fontSize: 13, fontWeight: 400, paddingTop: 15 }}>
                  Rob Melvin (Designation) - <span style={{ color: "#FFB703" }}>PLANNER</span>
                </p>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  disabled
                />
              </Stack>
              <div style={{width:880,marginTop:-30}}>
              <div style={{float:"right"}}>
                <p style={{ fontSize: 12, fontWeight: 400 }}>05-07-2021, 08:36 am</p>
              </div>
              </div>
              <p style={{ fontSize: 20, fontWeight: "normal", marginTop: -1 }}>
                Tadaa. Due date is 13-07-2021.
              </p>
            </Stack>
          </Stack>
          {/* sdfbkes jkrenkg */}
          <Stack direction="row" spacing={1}>
            <div style={{ backgroundColor: "#CCCCCC", borderRadius: 10, width: 6 }}></div>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Remy Sharp"
                  src="https://thumbs.dreamstime.com/z/male-avatar-icon-portrait-handsome-young-man-face-businessman-suit-necktie-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127093.jpg"
                />
                <p style={{ fontSize: 13, fontWeight: 400, paddingTop: 15 }}>
                  Neha Jha (Designation 2) - <span style={{ color: "#FFB703" }}>PLANNER</span>
                </p>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  disabled
                />
              </Stack>
              <div style={{width:880,marginTop:-30}}>
              <div style={{float:"right"}}>
                <p style={{ fontSize: 12, fontWeight: 400 }}>05-07-2021, 08:36 am</p>
              </div>
              </div>
              <p style={{ fontSize: 20, fontWeight: "normal", marginTop: -1 }}>
                Kindly approve the resource requirement plan. Due date is 13-07-2021.
              </p>
            </Stack>
          </Stack>
          {/* sdfbkes jkrenkg */}
          <Stack direction="row" spacing={1}>
            <div style={{ backgroundColor: "#CCCCCC", borderRadius: 10, width: 8 }}></div>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Remy Sharp"
                  src="https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170510316/77742783-businessman-avatar-character-icon-vector-illustration-design.jpg"
                />
                <p style={{ fontSize: 13, fontWeight: 400, paddingTop: 15 }}>
                  Ankit Sharma (Designation 1)- <span style={{ color: "#FFB703" }}>PLANNER</span>
                </p>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  disabled
                />
              </Stack>
              <div style={{width:880,marginTop:-30}}>
              <div style={{float:"right"}}>
                <p style={{ fontSize: 12, fontWeight: 400 }}>05-07-2021, 08:36 am</p>
              </div>
              </div>
              <p style={{ fontSize: 20, fontWeight: "normal", marginTop: -1 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              </p>
            </Stack>
          </Stack>
        </Stack>
          </div>
          <div style={{ marginBottom: 10 }}>
            <div style={{ float: "right" }}>
              <Stack direction="row" spacing={1}>
                <p style={{ fontSize: 20, fontweight: 600, color: "#023047" }}>
                  Approved{" "}
                  <span>
                    <VerifiedIcon />
                  </span>
                </p>
                <Button
                  style={{
                    width: 140,
                    height: 40,
                    backgroundColor: "#219EBC",
                    color: "White",
                    fontSize: 18,
                  }}
                >
                  Edit <EditIcon />
                </Button>
              </Stack>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
};
export default Inventory;
