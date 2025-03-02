interface Permissions {
    canRead: boolean,
    canEdit: boolean,
    canDelete: boolean 
}

type RolePermissions = {
    [K in "admin" | "user" | "guest"]: Permissions;
}

type ReadOnlyRolePermissions = {
    [K in "admin" | "user" | "guest"]: Readonly<Permissions>;
}

function setPermissions(role: "admin" | "user" | "guest", rolePermissions: RolePermissions) {
    if (role === "guest") {
        return
    }
    rolePermissions[role] = {
        canRead: !rolePermissions[role].canRead,
        canEdit: !rolePermissions[role].canEdit,
        canDelete: !rolePermissions[role].canDelete,
    };
}
  
  
// test
let rolePermissions: RolePermissions = {
    admin: { canRead: true, canEdit: true, canDelete: true },
    user:  { canRead: true, canEdit: false, canDelete: false },
    guest: { canRead: true, canEdit: false, canDelete: false }
};

console.log("До:", rolePermissions);
  
setPermissions('user', rolePermissions);
setPermissions('guest', { canRead: false, canEdit: true, canDelete: true });
  
console.log("После:", rolePermissions);
  
const readOnlyRolePermissions: ReadOnlyRolePermissions = rolePermissions;
console.log("Только для чтения:", readOnlyRolePermissions);
  