import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import { Company } from "../../Helpers/types";

interface DynamicAutocompleteProps {
  fetchSuggestions: (input: string) => Promise<string[]>; // Function to fetch suggestions based on input
  onSelectionChange?: (value: string | null) => void;
  defaultValue: string | undefined;
  error: boolean;
  helperText: string;
  disabled?:boolean;
}

const DynamicAutocomplete: React.FC<DynamicAutocompleteProps> = ({
  fetchSuggestions,
  onSelectionChange,
  defaultValue = "",
  error = false,
  helperText = "",
  disabled=false
}) => {
  const [options, setOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  if (defaultValue === undefined) {
    defaultValue = "";
  }

  useEffect(() => {
    if (inputValue) {
      const fetchData = async () => {
        const suggestions = await fetchSuggestions(inputValue);
        setOptions(suggestions);
      };

      fetchData();
    } else {
      setOptions([]);
    }
  }, [inputValue, fetchSuggestions]);

  return (
    <Autocomplete
      sx={{ margin: "8px" }}
      freeSolo
      disabled={disabled}
      options={options}
      value={defaultValue}
      onInputChange={(event, value) => setInputValue(value)}
      onChange={(event, value) => onSelectionChange?.(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={disabled?"":"Search company"}
          variant="outlined"
          error={error} // Pass the error state
          helperText={error ? helperText : ""} // Display the helper text if in error state
        />
      )}
    />
  );
};

export default DynamicAutocomplete;
