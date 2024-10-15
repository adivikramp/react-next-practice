/* eslint-disable react/prop-types */
export default function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔ {message}</span>
    </p>
  );
}
