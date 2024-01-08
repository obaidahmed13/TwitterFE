import React from 'react'

export default function ComingSoon({item}) {
  return (
    <div className='relative '>
        <img className="w-[100%] h-[43rem] object-cover" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af0b97a0-9384-4f3e-ba71-f175894bee93/d25heje-b64d1f75-c61c-4362-9da4-4aa4a2903c1f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FmMGI5N2EwLTkzODQtNGYzZS1iYTcxLWYxNzU4OTRiZWU5M1wvZDI1aGVqZS1iNjRkMWY3NS1jNjFjLTQzNjItOWRhNC00YWE0YTI5MDNjMWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IGymPP-ptqis20yHiSm5g0-xzAX_klnkV3fD5GMsB4A" alt="bgimage" />
        <h2  className="absolute top-1/3 mt-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl text-center font-bold">{item}</h2>
        <h2 className="absolute top-2/3 mt-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl text-center font-bold">COMING SOON</h2>
    </div>
    
  )
}
