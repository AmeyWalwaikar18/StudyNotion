import React from 'react'


const Stats = [
    {count: "5K", label: "Active Students"},
    {count: "10+", label: "Mentors"},
    {count: "200+", label: "Courses"},
    {count: "50+", label: "Awards"},
];

const StatsComponent = () => {
  return (
    <section className='mx-auto w-full'>
        <div className='w-11/12 '>
            <div className='w-11/12 flex gap-y-7 md:gap-y-0 md:flex-row flex-col items-center md:justify-between mx-auto'>
                {
                    Stats.map( (data, index) => {
                        return (
                            <div key={index} className='flex flex-col justify-center'>
                                <h1 className='font-bold text-[#F1F2FF] text-[30px] leading-[38px] text-center'>
                                    {data.count}
                                </h1>
                                <h2 className='font-semibold text-[#585D69] text-base text-align'>
                                    {data.label}
                                </h2>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    </section>
  )
}

export default StatsComponent
