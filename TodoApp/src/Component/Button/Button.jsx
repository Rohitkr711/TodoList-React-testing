// eslint-disable-next-line react/prop-types
function Button({ onclick, children, styleType }) {
   function getButtonStyle(styleType)
   {
      const primary = "bg-yellow-400";
      const secondary = "bg-red-400";

      if (styleType == "primary") {
         return primary;
      }
      else if(styleType=="secondary"){
         return secondary;
      }
   }
  return (
    <>
      <button
        onClick={onclick}
        className={`${getButtonStyle(styleType)} rounded-md px-2 font-semibold text-black`}
      >
        {children}
      </button>
    </>
  );
}
export default Button;
