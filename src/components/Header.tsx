import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header() {

    const pages = ["talks", "writing", "projects", "work"];
    const navitems = pages.map(page => 
    <div>
       <Nav page={page} />
    </div>
    );
 
    return <div>{navitems}</div>;
 
}

export function Nav({page}) { 

    const link = `/${page}`
    const img = `/${page}.png`
    const highlight = `${page}_highlight.png`.toString()
    
    console.log(highlight);
 
    return (
        <Link href={link}><a>
        <img
            src={img} 
            className="header" 
            layout="fill"
            onMouseOver={e => e.currentTarget.src = highlight}
            onMouseOut={e => e.currentTarget.src = img} />
        </a></Link>
    )
}