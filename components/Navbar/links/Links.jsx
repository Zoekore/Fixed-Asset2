import Image from "next/image";

const Links = () => {  
   
     
    
const link =[
        {
            id:1,
            title:"Overview",
            imge:"/Vector-2.jpg",
            path: "/Overview"
        },
        {
            id:2,
            title:"Assets",
            imge:"/asset.svg",
            path: "/Assets"
        },
        {
            id:3,
            title:"Tracking",
            imge:"/location.svg",
            path: "/Tracking"
        },
        {
            id:4,
            title:"Report",
            imge:"/document.svg",
            path: "/Report"
        },
        {
            id:5,
            title:"Profile",
            imge:"/profile.svg",
            path: "/Profile"
        },
        {
            id:6,
            title:"Settings",
            imge:"/settings.svg",
            path: "/Settings"
        }
    ]


  return (
    <div className=""> 
        {link.map((link=>(     
            <a href={link.path} key={link.id}>
                <div className="flex gap-[12px] py-[12px] px-[24px] items-center text-sm">
                    <Image src={link.imge} alt="" width={25} height={25}/>
                    {link.title}
                </div>
            
             </a>
        )))}
        
    </div>
  )
}

export default Links