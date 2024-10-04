import { useState, ChangeEvent, FormEvent, SetStateAction } from "react";
import { Box, Button, TextField } from "@mui/material";
import useTable from "../../hooks/api/usetable";

interface tableForm {
  showForm: boolean;
  setShowForm:React.Dispatch<SetStateAction<boolean>>
}

const TableForm = ({ showForm,setShowForm }: tableForm) => {
  const { createTable } = useTable();

  const [formValues, setFormValues] = useState({
    userName: "",
    contact: "",
    tableNo: "",
    chairQuantity: "",
    date: "",
  });

  const [formErrors, setFormErrors] = useState({
    userName: false,
    contact: false,
    tableNo: false,
    chairQuantity: false,
    date: false,
  });

  const [errorMessages, setErrorMessages] = useState({
    userName: "",
    contact: "",
    tableNo: "",
    chairQuantity: "",
    date: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const errors = {
      userName: !formValues.userName,
      contact: !formValues.contact || formValues.contact.length !== 10,
      tableNo: !formValues.tableNo,
      chairQuantity: !formValues.chairQuantity,
      date: !formValues.date,
    };

    const errorMessages = {
      userName: !formValues.userName ? "Username is required" : "",
      contact: !formValues.contact
        ? "Contact is required"
        : formValues.contact.length !== 10
        ? "Contact must be 10 digits"
        : "",
      tableNo: !formValues.tableNo ? "Table No is required" : "",
      chairQuantity: !formValues.chairQuantity
        ? "Chair Quantity is required"
        : "",
      date: !formValues.date ? "Date is required" : "",
    };

    setFormErrors(errors);
    setErrorMessages(errorMessages);

    return Object.values(errors).every((error) => !error);
  };

  const submitTable = async () => {
    const response = await createTable(formValues);
    if (response.success) {
      setShowForm(false);
      alert('table created successfully!');
    } else {
      alert(response.erroMsg);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      submitTable();
    }
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "45ch" } }}
      noValidate
      autoComplete="off"
      className={`form text-center w-fit h-[100vh] flex-col justify-center items-center absolute left-1/3 z-10 ${showForm ? 'flex' : 'hidden'}`}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-5 border-2 py-6 px-6 rounded-2xl bg-white">
        <h1 className="text-4xl font-semibold font-serif">Table Information</h1>
        <div className="flex flex-col">
          <TextField
            id="userName"
            label="Username"
            variant="outlined"
            required
            value={formValues.userName}
            onChange={handleInputChange}
            error={formErrors.userName}
            helperText={errorMessages.userName}
          />
          <TextField
            id="contact"
            label="Contact"
            variant="outlined"
            type="number"
            required
            value={formValues.contact}
            onChange={handleInputChange}
            error={formErrors.contact}
            helperText={errorMessages.contact}
          />
          <TextField
            type="number"
            id="tableNo"
            label="Table No"
            variant="outlined"
            required
            value={formValues.tableNo}
            onChange={handleInputChange}
            error={formErrors.tableNo}
            helperText={errorMessages.tableNo}
          />
          <TextField
            type="number"
            id="chairQuantity"
            label="Chair Quantity"
            variant="outlined"
            required
            value={formValues.chairQuantity}
            onChange={handleInputChange}
            error={formErrors.chairQuantity}
            helperText={errorMessages.chairQuantity}
          />
          <TextField
            type="date"
            id="date"
            label="Date"
            variant="outlined"
            required
            value={formValues.date}
            onChange={handleInputChange}
            error={formErrors.date}
            helperText={errorMessages.date}
          />
        </div>
        <Button type="submit" variant="contained" className="w-96">
          Create
        </Button>
      </div>
    </Box>
  );
};

export default TableForm;
