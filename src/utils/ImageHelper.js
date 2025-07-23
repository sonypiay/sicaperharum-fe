class ImageHelper {
    getFile(event, propName) {
        if( propName ) {
            const file = event.target.files[0];

            if( file ) {
                return {
                    file: file,
                    url: URL.createObjectURL(file),
                };
            }
        }
    }

    removeFile(propName) {
        if( propName ) {
            const formInput = document.querySelector(propName);
            formInput.value = '';
            formInput.dispatchEvent(new Event('change'));

            return {
                file: null,
                url: '',
            }
        }
    }
}

export default new ImageHelper;