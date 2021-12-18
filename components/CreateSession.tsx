import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import {
  Button,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from '@mui/material';
import { setDate } from 'date-fns/esm';
import { DateTimePicker, StaticTimePicker } from '@mui/lab';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { sessionsRef } from '../ts/firestoreConfig';
import { FirebaseAuthContext } from '../store/auth-context';

type CreateSessionType = {
  movieId: string | string[];
};

function CreateSession({ movieId }: CreateSessionType) {
  const context = React.useContext(FirebaseAuthContext);
  const userId = context.userId;

  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [gender, setGender] = React.useState('Any');
  const [ageDiff, setAgeDiff] = React.useState("Doesn't matter");
  const [multiplePeople, setMultiplePeople] = React.useState(false);
  const [maxPeople, setMaxPeople] = React.useState('2');
  const [message, setMessage] = React.useState('');
  const [isPasswordProtected, setPasswordProtected] = React.useState(false);
  const [password, setPassword] = React.useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeDiffChange = (event) => {
    setAgeDiff(event.target.value);
  };

  const handleMaxPeopleChange = (event) => {
    setMaxPeople(event.target.value);
  };

  const handleMultiplePeopleChange = () => {
    setMultiplePeople(!multiplePeople);
    setMaxPeople('10');
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handlePasswordProtectedChange = () => {
    setPasswordProtected(!isPasswordProtected);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const createSessionHandler = (event) => {
    event.preventDefault();
    setIsOpen(false);
    console.log({ date, gender, ageDiff, maxPeople });
    addDoc(sessionsRef, {
      creatorId: userId,
      movieId: movieId,
      date: date,
      gender: gender,
      ageDiff: ageDiff,
      targetAge: [],
      multiplePeople: multiplePeople,
      maxPeople: maxPeople,
      password: password,
      message: message,
      members: [],
      createdAt: serverTimestamp(),
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
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          <label htmlFor="multiplePeople">Multiple People</label>
          <Switch id="multiplePeople" onClick={handleMultiplePeopleChange} />
          {multiplePeople && (
            <div className="mb-3">
              <InputLabel id="maxPeople-label">Max Amount of People</InputLabel>
              <Select
                labelId="maxPeople-label"
                id="maxPeople"
                value={maxPeople}
                label="Max Amount of People"
                onChange={handleMaxPeopleChange}
              >
                <MenuItem value={'5'}>5</MenuItem>
                <MenuItem value={'10'}>10</MenuItem>
                <MenuItem value={'20'}>20</MenuItem>
                <MenuItem value={'30'}>30</MenuItem>
                <MenuItem value={'40'}>40</MenuItem>
                <MenuItem value={'50'}>50</MenuItem>
              </Select>
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="passwordProtection">Password protection</label>
            <Switch
              id="passwordProtection"
              onClick={handlePasswordProtectedChange}
            />
          </div>
          {isPasswordProtected && (
            <div className="mb-3">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={password}
                type={'password'}
                onChange={handlePasswordChange}
              />
            </div>
          )}
        </>
      )}
      {isOpen && (
        <div>
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
        </div>
      )}
    </form>
  );
}

export default CreateSession;
