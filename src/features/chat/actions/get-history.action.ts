export const getHistoryAction = async (limit: number) => new Promise<number[]>(r => {
    setTimeout(() => { r([1,2,3,4]); }, 1000)
})