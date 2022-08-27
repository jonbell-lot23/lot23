import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {
    const pages = ["talks", "writing", "work", "projects"];
    const navitems = pages.map(page => 
    <div>
       <Nav page={page} />
    </div>
    );
    
    return (
    <div className="w-full px-4 mx-auto mt-8 sm:w-80 sm:px-0">
        <div className="flex flex-wrap space-x-0">{navitems}</div>
    </div>); 
}

export function Nav({page}) { 

    const router = useRouter()
    const currentPath = router.asPath;
    const link = `/${page}`
    
    const img = currentPath == link ? `/${page}_highlight.png` : `/${page}.png`
    const highlight = `${page}_highlight.png`.toString()

    return (
        <Link href={link}><a>
        <img
            src={img} 
            className="header" 
            onMouseOver={e => e.currentTarget.src = highlight}
            onMouseOut={e => e.currentTarget.src = img} />
        </a></Link>
    )
}