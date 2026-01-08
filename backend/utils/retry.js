export const retry = async (
  fn,
  {
    retries = 3,
    delay = 3000,
    onRetry = null
  } = {}
) => {
  let lastError;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      if (onRetry) {
        onRetry(err, attempt);
      }

      if (attempt < retries) {
        await new Promise(res => setTimeout(res, delay));
      }
    }
  }

  throw lastError;
};
