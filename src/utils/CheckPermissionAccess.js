import {useRoute} from "vue-router";

export default function CheckPermissionAccess(permission, roles) {
    const userProfile = JSON.parse(localStorage.getItem('user_profile'));
    const userRole = userProfile.role.code;

    if( roles === undefined ) {
        const route = useRoute();
        roles = route.meta.roles;
    }

    return roles[userRole][permission] ?? false;
}