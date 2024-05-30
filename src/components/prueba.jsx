export function Prueba(params) {

    const array = [
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Banana', category: 'Fruit' },
        { id: 3, name: 'Carrot', category: 'Vegetable' },
        { id: 4, name: 'Date', category: 'Fruit' },
        { id: 5, name: 'Eggplant', category: 'Vegetable' },
    ];
    const searchStreamer = (streamers, searchTerm) =>{
        return streamers.filter(item => {
          return Object.values(item).some(value => 
              value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          );
      });
      }
    const searchTerm = 'ple';
    const results = searchStreamer(array, searchTerm);
    console.log(results);
    return(
        <div className="h-screen">
            <h1>aqui hare una prueba</h1>
        </div>
    )
}