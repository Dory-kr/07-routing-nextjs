"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <p>
      Could not fetch note details. {error.message}
    </p>
  );
};

export default Error;
