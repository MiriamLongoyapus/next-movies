'use client'
import Image from 'next/image'
import { getMovies } from './utilities/getMovies'
import { useState,useEffect } from 'react'
import { NEXT_PUBLIC_IMAGE_BASE_URL } from './config'
import Link from 'next/link'

interface MovieProps{
  id:number;
  title:string;
  genre_ids:number[]
  poster_path:string
}
export default function Home() {
  const[movies,setMovies]=useState<MovieProps[]>();
  useEffect(()=>{
    (async()=>{
      const movies=await getMovies();
      setMovies(movies)
      console.log({movies});
    })()
  },[])
  return (
    <main className='p-2'>
      <div className='grid grid-cols-4 gap-4'>
      {movies?.map((item) => (
      //    <Link href={`/movie/${item.id}`} key={item.id}>
      //    <div key={item.id}>
      //      <img src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} />
      //    </div>
      //  </Link>
      <Link href={`/movie/${item.id}`} key={item.id}>
        <div key={item.id}>
  <img src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${item.poster_path}`}alt={item.title}/>
        </div>
        </Link>
      ))}
      </div>
    </main>
  )
      }









