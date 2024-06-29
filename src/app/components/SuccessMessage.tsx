type SuccessMessageProps = {

  onClose: () => void;
};

export default function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
        <div className="mb-4">
          <div className="flex items-center justify-center mb-2">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-green-600">Gracias</h2>
          <p className="text-gray-700 mt-2">
            Gracias por tu confirmación. <br /> Nos vemos en el evento.
          </p>
        </div>
        <button
          onClick={onClose}
          className="bg-primaryBackgroundColor text-secondaryTextColor px-4 py-2 rounded-lg mt-4"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};


