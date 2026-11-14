const API_URL = "/embryo-api/users/count.php"

// No payload: the server derives a daily anonymous id from the request itself (HMAC with a
// secret discarded at end of day). Nothing is stored on or read from the visitor's device.
export const reportVisitor = (): void => {
    // Embryo Studio: no visitor counting.
    void API_URL
}
