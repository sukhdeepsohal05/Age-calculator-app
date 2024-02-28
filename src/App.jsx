import { useState } from "react";
import DateInputForm from "./components/DateInputForm";
import DateOutputBox from "./components/DateOutputBox";
import { calculateAge } from "./calcAge";

const today = new Date();
const birthDate = {
  day: null,
  month: null,
  year: null,
};

function checkDayError(day, month, year) {
  let errorText = "";
  const maxDays = new Date(year, month, 0).getDate();
  if (day < 1) {
    errorText = "This field is required";
  } else if (day > 31 || day > maxDays) {
    errorText = "Must be a valid day";
  } else if (
    day >= today.getDate() &&
    month - 1 >= today.getMonth() &&
    year >= today.getFullYear()
  ) {
    console.log("hello");
    errorText = "Must be in the past";
  } else {
    errorText = "";
  }

  return errorText;
}

function checkMonthError(month, year) {
  let errorText = "";
  if (month < 1) {
    errorText = "This field is required";
  } else if (month < 1 || month > 12) {
    errorText = "Must be a valid month";
  } else if (
    month - 1 > today.getMonth() &&
    Number(year) === today.getFullYear()
  ) {
    errorText = "Must be in the past";
  } else {
    errorText = "";
  }
  return errorText;
}

function checkYearError(year) {
  let errorText = "";
  if (year < 1) {
    errorText = "This field is required";
  } else if (year > today.getFullYear()) {
    errorText = "Must be in the past";
  } else {
    errorText = "";
  }
  return errorText;
}

function App() {
  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [age, setAge] = useState({});

  function handleDayChange(day, month, year) {
    setDayError(checkDayError(day, month, year));
  }

  function handleMonthChange(day, month, year) {
    setMonthError(checkMonthError(month, year));
    setDayError(checkDayError(day, month, year));
  }

  function handleYearChange(day, month, year) {
    setYearError(checkYearError(year));
    setMonthError(checkMonthError(month, year));
    setDayError(checkDayError(day, month, year));
  }

  function submitHandler(e, day, month, year) {
    e.preventDefault();
    setDayError(checkDayError(day, month, year));
    setMonthError(checkMonthError(month, year));
    setYearError(checkYearError(year));
    if (
      day !== "" &&
      month !== "" &&
      year !== "" &&
      dayError === "" &&
      monthError === "" &&
      yearError === ""
    ) {
      birthDate.day = day;
      birthDate.month = month;
      birthDate.year = year;
      setAge(calculateAge(birthDate));
    }
  }

  return (
    <>
      <div className="content-box">
        <DateInputForm
          dayErrorProp={dayError}
          monthErrorProp={monthError}
          yearErrorProp={yearError}
          onDayChange={handleDayChange}
          onMonthChange={handleMonthChange}
          onYearChange={handleYearChange}
          onSubmit={submitHandler}
        />
        <DateOutputBox age={age} />
      </div>
    </>
  );
}

export default App;
