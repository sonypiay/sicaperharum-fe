import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

export const datePickerOnlyDate = (selector, selectedDate) => {
    const option = {
        dateFormat: "Y-m-d",
        altFormat: "F j, Y",
        altInput: true,
        enableTime: false,
        maxDate: "today"
    };

    if( selectedDate ) option.defaultDate = selectedDate;

    flatpickr(selector, option);
}

export const datePickerOnlyTime = (selector, selectedDate) => {
    const option = {
        dateFormat: "H:i",
        enableTime: true,
        noCalendar: true,
        time_24hr: true,
        defaultDate: selectedDate
    };

    if( selectedDate ) option.defaultDate = selectedDate;

    flatpickr(selector, option);
}

export const datePickerWithDateAndTime = (selector, selectedDate) => {
    const option = {
        dateFormat: "Y-m-d H:i",
        altFormat: "F j, Y H:i",
        altInput: true,
        enableTime: true,
        time_24hr: true
    };

    if( selectedDate ) option.defaultDate = selectedDate;

    flatpickr(selector, option);
}

export const datePicker = (selector, option) => {
    flatpickr(selector, option);
}