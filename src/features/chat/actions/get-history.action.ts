
export type HistoryResponse = {
    content: number[]
}

export const getHistoryAction = async (limit: number): Promise<number[]> => {
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/calc-bot/history/${limit}`,
        {
            method: 'GET',
            redirect: 'follow'
        }
    );
    const result: HistoryResponse = await response.json();
    return result.content;
}
