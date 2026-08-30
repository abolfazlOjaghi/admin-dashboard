import clsx from "clsx";
import { useId, forwardRef } from "react";
const Input = forwardRef(
  (
    {
      children,
      placeholder,
      width = "w-full",
      label,
      error,
      reserveErrorSpace = false,
      ...props
    },
    ref,
  ) => {
    const inputId = useId();
    return (
      <>
        {label && <label htmlFor={inputId}>{label}</label>}
        <div
          className={clsx(
            "relative flex-1",
            width === "w-full" ? width : "max-w-80",
          )}
        >
          {children}
          <input
            ref={ref}
            type="text"
            id={inputId}
            placeholder={placeholder}
            className={clsx(
              "pr-4 py-2.5 rounded-xl bg-gray-100 dark:bg-zinc-900 font-medium placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-blue-600/40",
              width,
              children ? "pl-10" : "pl-4",
            )}
            {...props}
          />
        </div>
        {reserveErrorSpace && (
          <p className="min-h-3 text-red-600 text-sm font-semibold">
            {error || ""}
          </p>
        )}
      </>
    );
  },
);
Input.displayName = "Input";
export default Input;
