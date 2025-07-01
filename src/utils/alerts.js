import Swal from "sweetalert2"
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export const alertSuccess = async(title, message) => {
    return Swal.fire({
        icon: 'success',
        title: title,
        text: message,
    });
}

export const alertFailed = async(title, message) => {
    return Swal.fire({
        icon: 'error',
        title: title,
        text: message,
    });
};

export const alertConfirm = async(title, message) => {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            return true;
        } else {
            return false;
        }
    });
}

export const toastSuccess = (message) => {
    Toastify({
        text: message,
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        className: 'toastify-rounded toastify-bg-success'
    }).showToast();
}

export const toastFailed = (message) => {
    Toastify({
        text: message,
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        className: 'toastify-rounded toastify-bg-danger'
    }).showToast();
}