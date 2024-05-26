export function CardsGuides({itemsGuides}) {
    
    return(
        <section className="w-full h-screen bg-pink-50">
{
    itemsGuides.map((item) => {
        return(
            <div key={item.title}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.level}</p>
                <p>{item.lenguage}</p>
            </div>
        )
    })
}
        </section>
    )
}