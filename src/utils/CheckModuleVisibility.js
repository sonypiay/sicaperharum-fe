export const CheckModuleVisibility = {
    dashboard: {
        roles: ["superadmin", "admin", "user"],
    },
    reports: {
        roles: ["superadmin", "admin", "user"],
    },
    patient: {
        roles: ["superadmin", "admin", "user"],
    },
    patientVisitor: {
        roles: ["superadmin", "admin", "user"],
    },
    masterData: {
        user: {
            roles: ["superadmin"],
        },
        klaster: {
            roles: ["superadmin"],
        },
        spesimen: {
            roles: ["superadmin"],
        },
        metodePembayaran: {
            roles: ["superadmin"],
        }
    }
}