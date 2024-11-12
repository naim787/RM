
export default function TollBar({SETul}) {
    return (
        <>
        <nav className="w-full h-20 bg-white fixed bottom-0 left-0 flex md:hidden">
            <ul className="w-full h-auto flex justify-around text-2xl border-red-500 m-auto text-white">
                <li><a href=""><i className="p-3 bg-red-600 rounded-full fa-solid fa-heart"></i></a></li>
                <li><a href=""><i className="p-4 bg-gray-900 rounded-full fa-solid">+</i></a></li>
                <li><a href="#"><i className="p-3 bg-gray-600 rounded-full fa-solid fa-shopping-cart"
                onClick={SETul}
                ></i></a></li>
            </ul>
        </nav>
        </>
    )
}