type SlideSwitchProps = {
  enabled: boolean,
  onChange: () => void
}

function SlideSwitch ({enabled, onChange}: SlideSwitchProps) {

  return (
    <div className="inline-block mx-3">
      <button
        onClick={onChange}
        className={`w-9 h-3 flex items-center rounded-full py-1 -px-1 transition-colors duration-300 my-3  ${
          enabled ? 'bg-blue-400' : 'bg-blue-100'
        }`}
      >
        <div
          className={`bg-blue-500 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
            enabled ? 'translate-x-6' : '-translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}

export default SlideSwitch;