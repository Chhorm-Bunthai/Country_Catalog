import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PopupModal from "./PopupModal";
import { Tooltip } from "@mui/material";
const columns = [
  { id: "img", label: "Flags", width: 70 },
  { id: "name", label: "Country Name", width: 130 },
  { id: "cca2", label: "cca2", width: 130 },
  { id: "cca3", label: "cca3", width: 130 },
  { id: "nativeName", label: "Native Name", width: 130 },
  { id: "altSpellings", label: "altSpellings", width: 130 },
  { id: "idd", label: "IDD", width: 130 },
];

export default function CountryList({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("name");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRowClick = (row) => {
    setSelectedCountry(row);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  console.log(data[0]);

  const rows = data.map((el, index) => {
    return {
      ...el,
      id: index,
      img: el.flags.png,
      name: el.name.official,
      cca2: el.cca2,
      cca3: el.cca3,
      nativeName: Object.keys(el.name.nativeName || {}).map(
        (langCode) =>
          `${el.name.nativeName[langCode].official}${
            langCode !== "eng" ? ` (${langCode})` : ""
          }, `
      ),
      altSpellings: el.altSpellings[0],
      idd: `${el.idd.root}${el.idd.suffixes ? el.idd.suffixes[0] : ""}`,
    };
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSort = (columnnId) => {
    if (columnnId === "name") {
      const isAsc = sortColumn === columnnId && sortOrder === "asc";
      setSortOrder(isAsc ? "desc" : "asc");
      setSortColumn(columnnId);
    }
  };

  const sortedRows = rows.slice().sort((a, b) => {
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];

    if (typeof valueA === "string" && typeof valueB === "string") {
      return sortOrder === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }
  });
  console.log(data[0]);
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    onClick={() => handleSort(column.id)}
                  >
                    <span style={{ fontWeight: "bold" }}>{column.label}</span>
                    {sortColumn === column.id ? (
                      <span>{sortOrder === "asc" ? " 🔽 Asc" : " 🔼Dsc"}</span>
                    ) : null}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      onClick={() => handleRowClick(row)}
                    >
                      {columns.map((column) => {
                        if (column.id === "img") {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <img
                                src={row[column.id]}
                                alt="Country Flag"
                                style={{ width: "50px", height: "auto" }}
                              />
                            </TableCell>
                          );
                        } else {
                          const value = (
                            <span style={{ fontWeight: "500" }}>
                              {row[column.id]}
                            </span>
                          );
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        }
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {selectedCountry && (
        <PopupModal
          selectedCountry={selectedCountry}
          openModal={modalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
