const CheckPermissionAccess = (permission, roles) => {
    const userProfile = JSON.parse(localStorage.getItem('user_profile'));
    const userRole = userProfile.role.code;

    return roles[userRole][permission] ?? false;
}

export default CheckPermissionAccess;