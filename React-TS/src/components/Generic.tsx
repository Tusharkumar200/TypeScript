import { Dispatch, SetStateAction } from "react";
type InputValType = string | number;

const Generic = <T extends InputValType>({
  label,
  value,
  setter,
}: {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <form>
      <label>{label}</label>
      <input type="text" value={value} onChange={(e)=>setter(e.target.value as T)} />
      <button>submit</button>
    </form>
  );
};
export default Generic;