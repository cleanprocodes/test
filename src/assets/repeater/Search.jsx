import React from 'react'

function Search() {
  return (
    <div className='box-search'>
        <span className='font-bold text-2xl'>جستجو برای یافتن دستگاه مد نظر</span>
        <div className='flex items-center gap-4'>
            <label htmlFor="search" className='label-search w-full rounded-sm cursor-pointer'>
                {/* <MagnifyingGlassIcon className='w-4 h-4'/> */}
                <span className='bg-[url("../../../src/assets/images/icons/Search.png")] bg-cover w-4 h-4'></span>
                <input id='search' className='bg-bgSearch w-full' placeholder='نام دستگاه مورد نظر خود را وارد کنید'/>
            </label>
            <button className='btn btn--primary px-12'>جستجو</button>
        </div>
    </div>
  )
}

export default Search