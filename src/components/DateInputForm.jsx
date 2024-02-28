import { useRef } from "react";
import arrowSvg from "../assets/images/icon-arrow.svg";

export default function DateInputForm({
  dayErrorProp,
  monthErrorProp,
  yearErrorProp,
  onDayChange,
  onMonthChange,
  onYearChange,
  onSubmit,
}) {
  const dayRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  return (
    <div className="date-form__wrapper">
      <form
        action="#"
        className="date-form"
        onSubmit={(e) =>
          onSubmit(
            e,
            dayRef.current.value,
            monthRef.current.value,
            yearRef.current.value
          )
        }
      >
        <div
          className={
            dayErrorProp
              ? "form-field__wrapper form-field__error"
              : "form-field__wrapper"
          }
        >
          <label htmlFor="day" className="field-label">
            Day
          </label>
          <input
            type="number"
            name="day"
            id="day"
            className="form-field"
            placeholder="DD"
            autoComplete="false"
            ref={dayRef}
            onChange={() =>
              onDayChange(
                dayRef.current.value,
                monthRef.current.value,
                yearRef.current.value
              )
            }
          />

          {dayErrorProp !== "" && (
            <p className="error-message">{dayErrorProp}</p>
          )}
        </div>
        <div
          className={
            monthErrorProp
              ? "form-field__wrapper form-field__error"
              : "form-field__wrapper"
          }
        >
          <label htmlFor="month" className="field-label">
            Month
          </label>
          <input
            type="number"
            name="month"
            id="month"
            className="form-field"
            placeholder="MM"
            autoComplete="false"
            ref={monthRef}
            onChange={() =>
              onMonthChange(
                dayRef.current.value,
                monthRef.current.value,
                yearRef.current.value
              )
            }
          />
          {monthErrorProp !== "" && (
            <p className="error-message">{monthErrorProp}</p>
          )}
        </div>
        <div
          className={
            yearErrorProp
              ? "form-field__wrapper form-field__error"
              : "form-field__wrapper"
          }
        >
          <label htmlFor="year" className="field-label">
            Year
          </label>
          <input
            type="number"
            name="year"
            id="year"
            className="form-field"
            placeholder="YYYY"
            autoComplete="false"
            ref={yearRef}
            onChange={() =>
              onYearChange(
                dayRef.current.value,
                monthRef.current.value,
                yearRef.current.value
              )
            }
          />
          {yearErrorProp !== "" && (
            <p className="error-message">{yearErrorProp}</p>
          )}
        </div>
        <button type="submit" className="form-submit__button">
          <img src={arrowSvg} alt="Arrow Image" />
        </button>
      </form>
    </div>
  );
}
