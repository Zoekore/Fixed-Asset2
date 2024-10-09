import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";



const Overview = () => {

  const asset=[
    {
      id:1,
      Name:"Benz",
      Category:"Machinery",
      AssetId:"2024/M0012",
      Value:"$25000",
      Status:"Active",
      Location:"Lagos,Nigeria"
    },
    {
      id:2,
      Name:"Benz",
      Category:"Machinery",
      AssetId:"2024/M0012",
      Value:"$25000",
      Status:"Active",
      Location:"Lagos,Nigeria"
    },
    {
      id:3,
      Name:"Benz",
      Category:"Machinery",
      AssetId:"2024/M0012",
      Value:"$25000",
      Status:"Active",
      Location:"Lagos,Nigeria"
    },
    {
      id:4,
      Name:"Benz",
      Category:"Machinery",
      AssetId:"2024/M0012",
      Value:"$25000",
      Status:"Active",
      Location:"Lagos,Nigeria"
    },
    {
      id:5,
      Name:"Benz",
      Category:"Machinery",
      AssetId:"2024/M0012",
      Value:"$25000",
      Status:"Active",
      Location:"Lagos,Nigeria"
    }
  ]

  const nit="/arrow-up.svg";
  const nat="/icon2.svg";
  const net="/icon3.svg";
  const nut="/icon4.svg";
  const cards= [
    {
      id:1,
      title: "Total Assets",
      im:"/Icon.svg",
      amount:"120",
      ime:"/green-arrow.svg",
      path:""
    },
    {
      id:2,
      title: "Total Depreciation",
      im:"/Icon.svg",
      amount:"#12000",
      ime:"/red-arrow.svg",
      path:""
    },
    {
      id:3,
      title: "Total Leads",
      im:"/Icon.svg",
      amount:"15",
      ime:"/green-arrow.svg",
      path:""
    }
  ]
  return (
    <div>
      <div className="flex items-center justify-between ">
         {cards.map((dat=>(
          <div
          className="bg-[#FAFAFA] w-[20.5rem] gap-3 pt-8 pb-16 px-8 rounded-lg"
           key={dat.id}>
            <div className="flex items-center justify-between text-lg font-bold">
            {dat.title}
            <Image src={dat.im} alt=""  width="10" height="10"/>
            </div>
           
            <div className="flex items-center gap-3 pt-10 font-semibold text-lg">
              <h2>
                {dat.amount}
              </h2>
              <div>
                  <Image src={dat.ime} alt="" width="20" height="20"/>
              </div>
            </div>
          </div>
         )))
        }
      </div>
      <div className="pt-[1rem]">
       <div className="bg-[#FAFAFA] p-[1rem] rounded-lg">
        <h2>Recent Asset</h2>
          <Table className="w-[]">
            <TableCaption>
              <div className="flex items-center gap-2 text-[#B08FD] text-sm font-bold justify-center ">
                View All
              <Image src={nit} alt="" width="12" height="12"/>
              </div>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[15rem]">Name</TableHead>
                <TableHead className="w-[15rem]">Category</TableHead>
                <TableHead className="w-[10rem]">Asset ID</TableHead>
                <TableHead className="w-[10rem]">Value</TableHead>
                <TableHead className="w-[10rem]">Status</TableHead>
                <TableHead className="w-[10rem]">Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                    {asset.map((dat=>(
                      <TableRow key={dat.id}>
                        <TableCell className="w-[]">{dat.Name}</TableCell>
                        <TableCell className="w-[]">{dat.Category}</TableCell>
                        <TableCell className="w-[]">{dat.AssetId}</TableCell>
                        <TableCell className="w-[]">{dat.Value}</TableCell>
                        <TableCell className="w-[]">{dat.Status}</TableCell>
                        <TableCell className="w-[]">{dat.Location}</TableCell>
                        <TableCell className="w-[2rem]">
                              <Image src={nut} alt="" width="17" height="15" />
                        </TableCell>
                        <TableCell className="w-[2rem]">
                          <Image src={net} alt=""  width="15" height="15" />
                        </TableCell>
                        <TableCell className="w-[2rem]" >
                          <Image src={nat} alt=""  width="3" height="3" />
                        </TableCell>
                      </TableRow>
                    )))}
            </TableBody>
          </Table>
       </div>
       </div>
    </div>
  )
}

export default Overview