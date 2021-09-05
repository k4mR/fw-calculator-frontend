export const sendOperationAction = async (message: string) => new Promise<number>(r => {
    setTimeout(() => { r(1); }, 1000)
})