import { useEffect, useState } from "react";

export function useGameModalLoad(loadTimeoutMs: number) {
  const [loading, setLoading] = useState(true);
  const [showRetry, setShowRetry] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    if (!loading) return;

    const id = window.setTimeout(() => {
      setShowRetry(true);
    }, loadTimeoutMs);

    return () => window.clearTimeout(id);
  }, [loading, loadTimeoutMs, retryKey]);

  const onLoaded = () => {
    setLoading(false);
    setShowRetry(false);
  };

  const retry = () => {
    setLoading(true);
    setShowRetry(false);
    setRetryKey((k) => k + 1);
  };

  return { loading, showRetry, retryKey, onLoaded, retry };
}
