import swal from 'sweetalert';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

export const alertSuccess = async(title, message) => {
    return swal({
        icon: 'success',
        title: title,
        text: message,
    });
}

export const alertFailed = async(title, message) => {
    return swal({
        icon: 'error',
        title: title,
        text: message,
    });
};

export const alertConfirm = async(title, message) => {
    return await swal({
        title: title,
        text: message,
        icon: "warning",
        buttons: true,
        dangerMode: true,
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