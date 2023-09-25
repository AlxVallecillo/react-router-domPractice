export default function Button({ children }) {
  return (
    <button className="p-2 rounded-md bg-indigo-700 text-gray-100">
      {children}
    </button>
  );
}
