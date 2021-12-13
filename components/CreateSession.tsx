import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import { setDate } from 'date-fns/esm';
import { StaticTimePicker } from '@mui/lab';

function CreateSession() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = React.useState('2014-08-18');
  const [time, setTime] = React.useState(new Date('2014-08-18T21:11:54'));
  const [gender, setGender] = React.useState('Any');
  const [ageDiff, setAgeDiff] = React.useState("Doesn't matter");

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime);
    console.log(newTime);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    console.log(event.target.value);
  };

  const handleAgeDiffChange = (event) => {
    setAgeDiff(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="mt-5">
      {!isOpen && (
        <>
          <Button
            variant="contained"
            disableElevation
            size="large"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Create Session
          </Button>
        </>
      )}
      {isOpen && (
        <>
          <div className="mb-3">
            <DesktopDatePicker
              label="Date"
              inputFormat="MM/dd/yyyy"
              value={date}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div className="mb-3">
            <TimePicker
              label="Time"
              value={time}
              onChange={handleTimeChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div className="mb-3">
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              value={gender}
              label="Gender"
              onChange={handleGenderChange}
            >
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
              <MenuItem value={'Other'}>Other</MenuItem>
              <MenuItem value={'Any'}>Any</MenuItem>
            </Select>
          </div>
          <div className="mb-3">
            <InputLabel id="ageDiff-label">Age Difference</InputLabel>
            <Select
              labelId="ageDiff-label"
              id="ageDiff"
              value={ageDiff}
              label="Age Difference"
              onChange={handleGenderChange}
            >
              <MenuItem value={'1'}>+/- 1</MenuItem>
              <MenuItem value={'2'}>+/- 2</MenuItem>
              <MenuItem value={'3'}>+/- 3</MenuItem>
              <MenuItem value={'4'}>+/- 4</MenuItem>
              <MenuItem value={'5'}>+/- 5</MenuItem>
              <MenuItem value={"Doesn't matter"}>Doesn't matter</MenuItem>
            </Select>
          </div>
        </>
      )}
      {isOpen && (
        <Button
          variant="contained"
          disableElevation
          size="large"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Cancel Session Creation
        </Button>
      )}
    </div>
  );
}

export default CreateSession;
