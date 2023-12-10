import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
} from "react";

export interface InputWithButtonProps {
  defaultValue?: string | number | string[];
  isLoading?: boolean;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  buttonText?: string;
  controlId: number;
  label?: string;
  buttonType?: "submit" | "reset" | "button" | undefined;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClickButton: MouseEventHandler<HTMLButtonElement>;
}

export const InputWithButton = ({
  defaultValue,
  isLoading = false,
  placeholder = "",
  name,
  buttonText = "",
  label = "",
  buttonType = "button",
  type = "text",
  controlId,
  onChange,
  onClickButton,
}: InputWithButtonProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className="sr-only text-slate-900 dark:text-slate-50"
      >
        {label}
      </label>
      <div className="relative flex rounded-lg shadow-sm">
        <input
          defaultValue={defaultValue}
          control-id={`ControlID-${controlId}`}
          onChange={onChange}
          type={type}
          name={name}
          placeholder={placeholder}
          className="outline-none px-5 py-3 block w-full border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-50 dark:border-stale-50 dark:text-slate-950 dark:focus:ring-slate-50"
        />
        <button
          type={buttonType}
          onClick={onClickButton}
          className="outline-none py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          {isLoading ? (
            <div
              className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full dark:text-white"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <svg
              className="flex-shrink-0 h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          )}
          {buttonText}
        </button>
      </div>
    </>
  );
};
