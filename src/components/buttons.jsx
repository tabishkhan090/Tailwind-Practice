export const Button = ({
    onClick,
    children
}) => {
    return <div className='flex flex-col '>
        {/* <input type="text" placeholder="your birth year"
        className="bg-[#193f6a] text-white rounded-2xl px-15 py-3 text-4lx outline-none"></input>  */}

        <span onClick={ onClick } className="w-[300px] bg-button text-white rounded-lg px-12 py-3 text-4lx cursor-pointer
        flex items-center justify-center mt-10 outline-none ">
        {children}
        </span>
    </div>
}