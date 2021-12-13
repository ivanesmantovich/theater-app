import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { Button, InputLabel, MenuItem, Select } from '@mui/material';
import { setDate } from 'date-fns/esm';
import { DateTimePicker, StaticTimePicker } from '@mui/lab';
import { addDoc } from 'firebase/firestore';
import { sessionsRef } from '../ts/firestoreConfig';

type CreateSessionType = {
  movieId: string | string []
}

function CreateSession({movieId}: CreateSessionType) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [gender, setGender] = React.useState('Any');
  const [ageDiff, setAgeDiff] = React.useState("Doesn't matter");
  const [maxPeople, setMaxPeople] = React.useState('10');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeDiffChange = (event) => {
    setAgeDiff(event.target.value);
  };

  const handleMaxPeopleChange = (event) => {
    setMaxPeople(event.target.value);
  };

  const createSessionHandler = (event) => {
    event.preventDefault();
    setIsOpen(false);
    console.log({ date, gender, ageDiff, maxPeople });
    addDoc(sessionsRef, {
      movieId: movieId,
      date: date,
      gender: gender,
      ageDiff: ageDiff,
      maxPeople: maxPeople,
    }).then(() => {
      console.log('Session created');
    });
  };

  return (
    <form onSubmit={createSessionHandler} className="mt-5">
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Date and time"
                value={date}
                onChange={(newDate) => {
                  setDate(newDate);
                }}
              />
            </LocalizationProvider>
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
              onChange={handleAgeDiffChange}
            >
              <MenuItem value={'1'}>+/- 1</MenuItem>
              <MenuItem value={'2'}>+/- 2</MenuItem>
              <MenuItem value={'3'}>+/- 3</MenuItem>
              <MenuItem value={'4'}>+/- 4</MenuItem>
              <MenuItem value={'5'}>+/- 5</MenuItem>
              <MenuItem value={"Doesn't matter"}>Doesn't matter</MenuItem>
            </Select>
          </div>
          <div className="mb-3">
            <InputLabel id="maxPeople-label">Max Amount of People</InputLabel>
            <Select
              labelId="maxPeople-label"
              id="maxPeople"
              value={maxPeople}
              label="Max Amount of People"
              onChange={handleMaxPeopleChange}
            >
              <MenuItem value={'10'}>10</MenuItem>
              <MenuItem value={'20'}>20</MenuItem>
              <MenuItem value={'30'}>30</MenuItem>
              <MenuItem value={'40'}>40</MenuItem>
              <MenuItem value={'50'}>50</MenuItem>
            </Select>
          </div>
        </>
      )}
      {isOpen && (
        <>
          <span className="mr-3">
            <Button
              variant="contained"
              color="error"
              disableElevation
              size="large"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
          </span>
          <Button
            variant="contained"
            color="success"
            disableElevation
            size="large"
            type="submit"
          >
            Create
          </Button>
        </>
      )}
    </form>
  );
}

export default CreateSession;
