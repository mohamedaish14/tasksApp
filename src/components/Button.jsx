export default function Button({children,...props}){
   return (
        <button className="px-4 py-2 md:text-base rounded-md bg-stone-700 text-stone-100" {...props}>
            {children}
        </button>
   );
}