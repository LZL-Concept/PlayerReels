const BACKEND_PORT = import.meta.env.BACKEND_PORT ?? 3031

export const getBackendPort = () => {
    return BACKEND_PORT
}