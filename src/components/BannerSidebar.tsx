"use client"
import React from 'react'
import { Input } from './ui/input'
import { useSearchParams, useRouter } from 'next/navigation'
import qs from 'query-string'
import { ToggleTheme } from './ToggleTheme'
import BackgroundFilter from './filters/BackgroundFilter'
import { X } from 'lucide-react'

const BannerSidebar = () => {
    const searchParams = useSearchParams()
    const router = useRouter();

    const selectedWidth = searchParams.get('width') || '1200';
    const selectedHeight = searchParams.get('height') || '630';

    const onWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            width: e.target.value,
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }

    const onHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            height: e.target.value,
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }

    const resetSize = () => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            width: '1200',
            height: '630',
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString: true, skipNull: true });

        router.push(url);
    }
    // update these values based on the chosen template like twitter.. etc.
    const defaultSizeValues = ["1200", "630"];

    return (
        <aside className='w-[400px] pt-24 p-4 flex flex-col gap-4 bg-card shadow-sm rounded-r-md static min-h-screen top-0'>
            <h2 className='text-lg font-bold mb-4'>Dimensions</h2>
            <div className='flex justify-between'>
                {/* if the width (the width=.. from the searchparams) is not equal to 1200 OR same with the height but for 630 show this div so that it resets these values on click */}
                {selectedWidth !== defaultSizeValues[0] && selectedHeight !== defaultSizeValues[1] &&
                    <div onClick={() => resetSize()} className='text-primary/75 text-sm flex gap-2 items-center'>Reset
                        <X className='w-4 h-4 cursor-pointer' />
                    </div>
                }
            </div>
            <div className='flex flex-col gap-2'>
                <h3>Size</h3>
                <select className='bg-white h-10 rounded-md text-black'>
                    <option value='1200x630'>Custom Size</option>
                    <option value='1200x627'>1200 x 627</option>
                    <option value='1200x675'>1200 x 675</option>
                    <option value='1200x630'>1200 x 630</option>
                </select>
            </div>
            <div className='w-full flex pb-8 gap-1 justify-between items-end'>
                <div className='relative flex gap-4 items-center'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm'>Width</p>
                        <Input placeholder='1230'
                            value={selectedWidth}
                            onChange={onWidthChange}
                        />
                    </div>
                    <div className='text-sm mt-5 items-center justify-center flex  absolute transform   right-1/2 translate-x-1/2 h-5 w-5 rounded-md'>
                        x
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-sm'>Height</p>
                        <Input placeholder='630'
                            value={selectedHeight}
                            onChange={onHeightChange}
                        />
                    </div>
                </div>
                <select className='bg-white h-10 rounded-md text-black'>
                    <option value='px'>px</option>
                    <option value='%'>%</option>
                </select>
            </div>
            <BackgroundFilter />
            <h2 className='text-lg font-bold mb-4'>Dynamic Metrics</h2>
            <h2 className='text-lg font-bold mb-4'>Media</h2>
            <h2 className='text-lg font-bold mb-4'>Layers</h2>
            <ToggleTheme />
        </aside>
    )
}

export default BannerSidebar;
