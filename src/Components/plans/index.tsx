import { useHashStore } from "@/utils/hash";

export const Plans = ({
  title,
  description,
  values,
  hash,
}: {
  title: string;
  description: string;
  values: string[];
  hash: string;
}) => {
  const { setHashValue } = useHashStore();
  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-blue-900 bg-white rounded-lg border border-amber-100 shadow dark:border-amber-600 xl:p-8 dark:bg-slate-900 dark:text-white">
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        {description}
      </p>

      <ul role="list" className="mb-8 space-y-4 text-left mt-6">
        {values.map((e, i) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li className="flex items-center space-x-3" tabIndex={i}>
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>{e}</span>
            </li>
          );
        })}
      </ul>
      <a
        href={`#home`}
        onClick={() => {
          setHashValue(hash);
        }}
        className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
      >
        Escolher
      </a>
    </div>
  );
};
