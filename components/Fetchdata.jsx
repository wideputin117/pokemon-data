 'use client'
 import Link from 'next/link'
 

 export async function Fetchdata(){
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  const data =  await res.json();
  return data.results;
}


// component to render the pokemon

 

const Pokemon = async() => {
  const data = await Fetchdata();

  return (
    <>
    <ul>
      {data.map((item)=>(
         <li key={item.name}>
          <h1>{item.name}</h1>
          <Link href={`${item.url}`}>
            More Info...
          </Link>
         </li>
      ))}
    </ul>
     
    </>
  )
}

export default Pokemon;