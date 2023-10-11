/* eslint-disable react/prop-types */
import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurreny = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) => {
  const amountInputId = useId();
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label
            htmlFor={amountInputId}
            className="text-black/40 mb-2 inline-block"
          >
            {label}
          </label>
          <input
            id={amountInputId}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(+e.target.value)}
            placeholder="Amount"
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            disabled={currencyDisable}
            value={selectCurreny}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          >
            {currencyOptions.map((curr) => {
              return (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
