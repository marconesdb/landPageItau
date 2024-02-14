import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'
import { text } from 'stream/consumers'
export function Search(){
    return (
        <div className='flex items-center gap-4'>
            <Image
              src={IconSearch} alt="Search"/>
            <input type="text" className='bg-transparent outline-none text-white pr-5 placeholder:text-white' placeholder='Buscar'/>
        </div>
    )
}