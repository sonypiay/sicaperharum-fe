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