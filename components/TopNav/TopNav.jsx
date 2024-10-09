import Image from "next/image";

const TopNav = () => {
    const admin="/theme.svg";
    const notify="/notification.svg";
    const userName="SamuelOlugua";
    const email="example@domain.com"
  
return (
    <>
        <div className="flex items-center justify-between p-[8px] text-lg">
            <h1 className="text-font">Fixed assets</h1> 
            <div> 
                <div className="flex items-center p-3 gap-2">
                    <div>
                        <Image src={notify} alt="" width={20} height={20} />
                    </div>
                    <div>
                    <Image src={admin} alt="" width={50} height={25} />
                    </div>
                    <div className="text-sm">
                        <h4>{userName}</h4>
                        <p>{email}</p>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default TopNav