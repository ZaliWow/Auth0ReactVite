export function Products(params) {
    return(
        <div class="max-w-sm rounded overflow-hidden shadow-lg m-10">
          
            <img class="w-50 h-100" src="public\Logo.png" alt="Producto" />
         
  
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Nombre del Producto</div>
    <p class="text-gray-700 text-base">
      Descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p class="text-gray-700 text-base mt-2">Precio: $19.99</p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag1</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag2</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Tag3</span>
  </div>
</div>
    )
}