export type OperationResponse = {
    content: number
}

export const sendOperationAction = async (message: string): Promise<number> => {
    const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/calc-bot/calculate`,
        {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ operation: message })
        }
    );
    const result: OperationResponse = await response.json();
    return result.content;
}
