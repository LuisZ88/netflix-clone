import {HiSearch,HiBell} from "react-icons/hi"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 0 ){
                setIsScrolled(true)
            } else setIsScrolled(false)
        }
        window.addEventListener("scroll", handleScroll)
        return ()=> {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
  return (
  <header className={`${isScrolled && "bg-[#141414]"}`}>
    <div className="flex items-center space-x-2 md:space-x-10">
        <Image src="https://rb.gy/ulxxee"  objectFit="fill" width={100} height={60} className="cursor-pointer" alt="logo"/>

        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Inicio</li>
            <li className="headerLink">Tv Shows</li>
            <li className="headerLink">Películas</li>
            <li className="headerLink">Nuevo</li>
            <li className="headerLink">Mi lista</li>
        </ul>
    </div>
    <div className="flex items-center space-x-4 text-sm font-light">
        <HiSearch className="hidden sm:inline h-6 w-6 cursor-pointer"/>
        <p className="hidden lg:inline">Kids</p>
        <HiBell className="h-6 w-6"/><div>
        <Link href="/account">
            <Image src="https://rb.gy/g1pwyx"  layout="fixed" width={24} height={24} className="cursor-pointer rounded" alt="logo"/>
        </Link></div>

        
    </div>

  </header>);
}

export default Header;
