export async function apiRequest<T>(
  endpoint: string,
  method: string,
  body?: object
): Promise<T> {
  console.log('body', body);
  const response = await fetch(`http://localhost:3000/api/${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  console.log("response", response)

  const text = await response.text();
  console.log('Raw response:', text);

  if (!response.ok) {
    try {
      const error = JSON.parse(text);
      throw new Error(error.message || 'Something went wrong');
    // @ts-expect-error
    } catch (_e) {
      throw new Error(`Invalid JSON: ${text}`);
    }
  }

  try {
    return JSON.parse(text);
    // @ts-expect-error
  } catch (_e) {
    throw new Error(`Invalid JSON: ${text}`);
  }
}
