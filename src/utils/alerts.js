import Swal from "sweetalert2"

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