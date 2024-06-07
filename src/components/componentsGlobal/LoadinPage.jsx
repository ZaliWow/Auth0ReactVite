export function LoadingPage(params) {
    return(

<div 
        
        className="w-screen h-full text-white">
      <div className="skeleton w-full h-32"></div>

        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div  className="w-full max-w-3xl text-center">
          <div className="flex flex-col gap-4 w-full">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
          </div>
          
          <div className="md:block md:w-1/2 py-4" >
          <div className="skeleton w-1/2 md:h-96 h-32 m-10">
          </div> 
          </div> 
        </div>
      
      </div>

















       
    
    )
}