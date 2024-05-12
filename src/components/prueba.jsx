import { useState } from "react";



export function Prueba (){
  
  const [bodyProduct, setBodyProduct]=useState({ 
  title:"hamburguesa prueba 3",
  image:"http:image/prueba 3",
  description:"esto es prueba 3",
  price:"10000"
  })


  const handleCreateProduct = async(e) =>{
    e.preventDefault()
  try {
    const res = await fetch(import.meta.env.VITE_END_POINT_PRODUCT,{
    method:'POST',
    body: JSON.stringify(bodyProduct),
    headers:{
      "apikey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwd2N0a2VxY3pkZWNpcWl0cmpmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDM5ODA1OSwiZXhwIjoyMDI5OTc0MDU5fQ.X3e0o62Q_San1a4vmM44Z4JSe7-nL7IwZxQcEJnk1wY",
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6InNjc1JrYm5KRk9FMStGU0siLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE0NDA2MjYyLCJpYXQiOjE3MTQ0MDI2NjIsImlzcyI6Imh0dHBzOi8veXB3Y3RrZXFjemRlY2lxaXRyamYuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjdkOWZhNWI5LTM1NjYtNDIzZC05NjMxLTIwZTMwMGNmMDc5NiIsImVtYWlsIjoibW9yYWxlcy53aWxsaWFtQGNvcnJlb3VuaXZhbGxlLmVkdS5jbyIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6Im90cCIsInRpbWVzdGFtcCI6MTcxNDQwMjY2Mn1dLCJzZXNzaW9uX2lkIjoiMmMzM2VjN2MtNjRkYi00YTVkLWE1ZmEtM2ZhZDdmYmU3NDVhIiwiaXNfYW5vbnltb3VzIjpmYWxzZX0.jFUw9Axv3LnCFTH87kkCG-Zi0gh9oZn2Pkp_2h1DNfM",
      "Prefer":"return=minimal",
      "Content-Type":"application/json"
    }
    })
  console.log(res)
  
  } catch (error) {
    console.log(error)
  }


  }

return(
  <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
  <div class="sm:flex sm:items-center px-6 py-4">
      <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
      <p class="text-xl font-semibold">Bienvenido</p>
      <p class="text-sm text-gray-600">Esto es una prueba para tiktok</p>
      <div class="mt-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </div>
    </div>
  </div>
</div>

)
}