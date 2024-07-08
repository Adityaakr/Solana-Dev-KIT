import React from 'react';

type Props = {
    first: React.ReactNode;
    second: React.ReactNode;
    third: React.ReactNode;
    data: string;
}

const Card = (props: Props) => {
    return (
        <div className="transform transition duration-300 hover:-translate-y-1 hover:scale-105 shadow-2xl p-4 ml-10  flex justify-center items-center gap-5 mt-3 hover:bg-purple-300">
            <div className="max-w-sm p-6 bg-white border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700 font-bold border-2">
               <p className='text-3xl mb-2'>
               <a href={props.data}>
                </a>
                {props.first}
               </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-900">
                    <a href={props.data}>{props.second}</a>
                    
                </p>
                <a href={props.data} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-indigo-400 rounded-md">
                    {props.third}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default Card;
