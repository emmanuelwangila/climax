import Link from "next/link";


export default function Home() {
  return (
    <main>
      <div className="flex justify-center m-2 p-2 text-blue-300">
      <h2 className="flex justify-center font-bold text-green-500"> Dashboard</h2>
      <p className=" text-blue-500 m-2 p-2 flex justify-start">
      lorem Ipsum is simply dummy text of the printing atypesetting industry.
       Lorem Ipsum has been the industry's
       standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap 
        into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets 
        containing Lorem Ipsum passages, and more recently with desktop publishing
         software like Aldus PageMaker including versions of Lorem Ipsum
      </p>

      </div>


    <div className="flex justify-start m-2 p-2 rounded-md ">
      <div className="flex ">
      <Link href="/tickets">
      <button className="bg-green-500 m-2 p-4 text-white text-xs rounded-md flex w-[100%] h-[25%]">View Tickets</button>
       </Link>
      </div>
      <div className="flex  m-2 p-2 ">
        <div className="card">
          <p className="text-blue-500  text-md  m-2 p-2 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it
         to make a type specimen book. It has survived not only five centuries, 
         but also the leap into electronic typesetting, remaining essentially unchanged. 
         It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage.

          </p>
      

        </div>

      </div>

    </div>
    </main>
    
  )
}
