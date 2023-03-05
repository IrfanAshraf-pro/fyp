import React, { useState } from "react";

const ScheduleCheckBox = ({
  item,
  Objkey = 0,
  setRow,
  isAll = false,
  setAllValues = null,
}) => {
  const [value, setvalue] = useState(item);
  const onChange = (e) => {
    let val = value === 1 ? 0 : 1;
    setvalue(val);
    sendingChanges(val);
  };
  const sendingChanges = (val) => {
    isAll ? setAllValues(val) : setRow(val, Objkey);
  };
  return (
    <input
      id={Objkey}
      value={value}
      onChange={onChange}
      defaultChecked={value != 0 && "checked"}
      type="checkbox"
      className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 ${value===2 && 'bg-orange-400'}`}
    />
  );
};

export default ScheduleCheckBox;
