import {forwardRef} from 'react';

const Input = forwardRef(function ({label, isTextarea = false, ...props}, ref) {

  const processed = label.replace(" ", "-").toLowerCase();
  const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none" +
    " focus:border-stone-600";

  return <p className="flex flex-col gap-1 my-4">
    <label htmlFor={processed} className="text-sm font-bold uppercase text-stone-500">{label}</label>
    {isTextarea
      ? <textarea id={processed} {...props} className={classes} ref={ref} />
      : <input id={processed} {...props} className={classes} ref={ref} />
    }
  </p>;
});

export default Input;
