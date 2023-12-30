export const fetchPostData = async <T>(url: string, data: T) => {
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};
