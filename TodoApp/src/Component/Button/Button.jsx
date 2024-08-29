// eslint-disable-next-line react/prop-types
function Button({onclick,children}){
   return(
    <>
    <button onClick={onclick} className="bg-yellow-400 rounded-md px-2 font-semibold text-black">{children}</button>
    </>
   )
}
export default Button