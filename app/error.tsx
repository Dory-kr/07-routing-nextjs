"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div>
      <p>Something went wrong. {error.message}</p>

      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default Error;