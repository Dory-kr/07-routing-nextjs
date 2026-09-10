"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ reset }: ErrorProps) => {
  return (
    <div>
      <h2>Something went wrong.</h2>

      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;