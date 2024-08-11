"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { cn } from '@/lib/utils';

enum GradientDirections {
    TO_LEFT = 'to left',
    TO_RIGHT = 'to right',
    TO_TOP = 'to top',
    TO_BOTTOM = 'to bottom',
}

const BackgroundFilter = () => {



    const colors = [
        { hex: '#FF0000', name: 'red' },
        { hex: '#FF7F00', name: 'orange' },
        { hex: '#FFFF00', name: 'yellow' },
        { hex: '#7FFF00', name: 'chartreuse green' },
        { hex: '#00FF00', name: 'green' },
        { hex: '#00FF7F', name: 'spring green' },
        { hex: '#00FFFF', name: 'cyan' },
        { hex: '#007FFF', name: 'azure' },
        { hex: '#0000FF', name: 'blue' },
        { hex: '#7F00FF', name: 'violet' },
        { hex: '#FF00FF', name: 'magenta' },
        { hex: '#FF007F', name: 'rose' },
        { hex: '#8B4513', name: 'saddle brown' },
        { hex: '#D2691E', name: 'chocolate' },
        { hex: '#FF6347', name: 'tomato' },
        { hex: '#FFD700', name: 'gold' },
        { hex: '#9ACD32', name: 'yellow green' },
        { hex: '#32CD32', name: 'lime green' },
        { hex: '#48D1CC', name: 'medium turquoise' },
        { hex: '#1E90FF', name: 'dodger blue' },
        { hex: '#6A5ACD', name: 'slate blue' },
        { hex: '#EE82EE', name: 'violet' },
        { hex: '#800000', name: 'maroon' },
        { hex: '#FF4500', name: 'orange red' },
        { hex: '#2E8B57', name: 'sea green' },
        { hex: '#A52A2A', name: 'brown' },
    ];

    const gradients = [
        { gradient: ['#ff7e5f', '#feb47b'], name: 'Sunset', direction: 'to right' },
        { gradient: ['#6a11cb', '#2575fc'], name: 'Royal Blue', direction: 'to right' },
        { gradient: ['#ff4b1f', '#ff9068'], name: 'Peach', direction: 'to right' },
        { gradient: ['#1a2a6c', '#b21f1f', '#fdbb2d'], name: 'Purple Haze', direction: 'to right' },
        { gradient: ['#00c6ff', '#0072ff'], name: 'Sky', direction: 'to right' },
        { gradient: ['#22c1c3', '#fdbb2d'], name: 'Summer', direction: 'to right' },
        { gradient: ['#8e2de2', '#4a00e0'], name: 'Electric Violet', direction: 'to right' },
        { gradient: ['#fbc2eb', '#a6c1ee'], name: 'Soft Pink', direction: 'to right' },
        { gradient: ['#56ccf2', '#2f80ed'], name: 'Blue Lagoon', direction: 'to right' },
        { gradient: ['#ff9a9e', '#fecfef'], name: 'Cherry Blossom', direction: 'to right' },
        { gradient: ['#00b09b', '#96c93d'], name: 'Green Beach', direction: 'to right' },
        { gradient: ['#f46b45', '#eea849'], name: 'Orangey', direction: 'to right' },
        { gradient: ['#a8ff78', '#78ffd6'], name: 'Green Mist', direction: 'to right' },
        { gradient: ['#c6ffdd', '#fbd786', '#f7797d'], name: 'Mango', direction: 'to right' },
        { gradient: ['#12c2e9', '#c471ed', '#f64f59'], name: 'Pink Cyan', direction: 'to right' },
        { gradient: ['#0fd850', '#f9f047'], name: 'Lime', direction: 'to right' },
        { gradient: ['#fe8c00', '#f83600'], name: 'Orange Sunset', direction: 'to right' },
        { gradient: ['#1d4350', '#a43931'], name: 'Autumn', direction: 'to right' },
        { gradient: ['#1f4037', '#99f2c8'], name: 'Sea Green', direction: 'to right' },
        { gradient: ['#2980b9', '#2c3e50'], name: 'Blue Grey', direction: 'to right' },
        { gradient: ['#76b852', '#8dc26f'], name: 'Green Grass', direction: 'to right' },
        { gradient: ['#e65c00', '#f9d423'], name: 'Orange Yellow', direction: 'to right' },
        { gradient: ['#3a1c71', '#d76d77', '#ffaf7b'], name: 'Dark Pink', direction: 'to right' },
        { gradient: ['#3b8d99', '#6b6b83', '#aa4b6b'], name: 'Purple Pink', direction: 'to right' },
        { gradient: ['#40e0d0', '#ff8c00', '#ff0080'], name: 'Turquoise Pink', direction: 'to right' },
        { gradient: ['#ffefba', '#ffffff'], name: 'Soft Yellow', direction: 'to right' },
    ];



    const searchParams = useSearchParams()
    const router = useRouter();

    const selectedSolidColor = searchParams.get('solidBgColor') || '#ffffff';
    const selectedGradient = searchParams.get('gradientBgColor') || '';
    const selectedGradientDirection = searchParams.get('gradientDirection') || GradientDirections.TO_RIGHT;


    const handleGradientChange = (gradient: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            gradientBgColor: gradient,
            solidBgColor: null, // Clear solid background color
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString: true, skipNull: true });

        router.push(url, { scroll: false });
    }

    const handleSolidColorChange = (color: string) => {
        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            solidBgColor: color,
            gradientBgColor: undefined,
            gradientDirection: undefined,
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString: true, skipNull: true });

        router.push(url, { scroll: false });
    }


    const rotateGradientDirection = () => {
        let direction = GradientDirections.TO_RIGHT;
        switch (selectedGradientDirection) {
            case GradientDirections.TO_RIGHT:
                direction = GradientDirections.TO_BOTTOM;
                break;
            case GradientDirections.TO_BOTTOM:
                direction = GradientDirections.TO_LEFT;
                break;
            case GradientDirections.TO_LEFT:
                direction = GradientDirections.TO_TOP;
                break;
            case GradientDirections.TO_TOP:
                direction = GradientDirections.TO_RIGHT;
                break;
        }

        const current = qs.parse(searchParams.toString());

        const query = {
            ...current,
            gradientDirection: direction,
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString: true, skipNull: true });

        router.push(url, { scroll: false });
    }

    return (
        <div className='flex flex-col'>
            <h2 className='text-lg font-bold mb-4'>Background</h2>
            <div>
                <Tabs defaultValue="solid" className="">
                    <TabsList className='w-full grid grid-cols-3 justify-between '>
                        <TabsTrigger value="solid">Solid</TabsTrigger>
                        <TabsTrigger value="gradient">Gradient</TabsTrigger>
                        <TabsTrigger value="custom">Custom</TabsTrigger>
                    </TabsList>
                    <TabsContent value="solid">
                        <div className='p-4 rounded-md bg-background grid grid-cols-9 gap-2 max-w-fit'>
                            {colors.map((color) => (
                                <div
                                    aria-label={color.name}
                                    onClick={() => handleSolidColorChange(color.hex)}
                                    key={color.hex} aria-hidden style={{ backgroundColor: color.hex }} className={cn(
                                        color.hex === selectedSolidColor ? 'outline outline-cta outline-offset-2' : 'border-transparent',
                                        'cursor-pointer w-8 h-8 border rounded-md')}></div>
                            ))}
                            <div className='w-8 h-8 flex items-center justify-center border rounded-md bg-transparent'>
                                <Plus className='w-5 h-5 text-gray-500' />
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="gradient">
                        <div className='p-4 rounded-md bg-background grid grid-cols-9 gap-2 max-w-fit'>
                            {gradients.map((gradient, index) => (
                                <div key={index} aria-label={gradient.name} onClick={() => handleGradientChange(gradient.gradient.join(','))} aria-hidden style={{ background: `linear-gradient(to right, ${gradient.gradient.join(',')})` }} className={cn(
                                    gradient.gradient.join(',') === selectedGradient && 'outline outline-cta outline-offset-2',
                                    'cursor-pointer w-8 h-8 border rounded-md')}></div>
                            ))}
                            <div className='w-8 h-8 border rounded-md flex items-center justify-center'>
                                +
                            </div>
                        </div>
                        {selectedGradient && <div className='bg-background  rounded-b-md grid grid-cols-12 p-4 pt-10'>
                            <div className='relative col-span-10 h-8 rounded-md w-full' style={{ background: `linear-gradient(to right, ${selectedGradient})` }}>
                                <div className="absolute -top-8 left-0 justify-between px-2 flex w-full">
                                    {selectedGradient.split(',').map((color, index) => (
                                        <div key={index} className='outline-1 outline outline-neutral-700 outline-offset-2 relative w-6 h-6 rounded-md' style={{ background: color }}>
                                            <div
                                                style={{ borderTopColor: color }}
                                                aria-hidden className="absolute -bottom-2 opacity-50 left-1/2 transform -translate-x-1/2 w-0 h-0  border-l-[7.5px] border-l-transparent border-t-[10px] border-t-red-500 border-r-[7.5px] border-r-transparent">
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div
                                onClick={() => rotateGradientDirection()}
                                className='bg-card rounded-md col-span-2 ml-auto w-8 h-8 border flex items-center justify-center'>
                                <svg className='fill-primary w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><path d="M 7.7265 25.1056 C 8.2656 24.8477 8.5000 24.4493 8.4765 23.7930 C 8.4062 22.9493 7.4452 21.7774 7.4452 18.6603 C 7.4452 13.6446 10.6796 10.1290 15.7421 10.1290 L 15.8124 10.1290 L 15.8124 13.3399 C 15.8124 15.1915 17.2656 15.6134 18.6718 14.5587 L 25.0702 9.8946 C 26.1484 9.1212 26.1484 8.2071 25.0702 7.4103 L 18.6718 2.7227 C 17.2421 1.6444 15.8124 2.0665 15.8124 3.9649 L 15.8124 7.4103 L 15.7187 7.4103 C 8.9921 7.4103 4.5156 11.9337 4.5156 18.6368 C 4.5156 21.1446 5.0312 23.2071 5.7578 24.4493 C 6.1562 25.1290 7.0000 25.4571 7.7265 25.1056 Z M 45.4609 54.3556 C 49.4689 54.3556 51.4844 52.4337 51.4844 48.3321 L 51.4844 25.1524 C 51.4844 21.0508 49.4689 19.1290 45.4609 19.1290 L 22.2343 19.1290 C 18.2265 19.1290 16.2109 21.0508 16.2109 25.1524 L 16.2109 48.3321 C 16.2109 52.4337 18.2265 54.3556 22.2343 54.3556 Z M 45.3905 50.5821 L 22.3046 50.5821 C 20.6874 50.5821 19.9843 49.9259 19.9843 48.2618 L 19.9843 25.2227 C 19.9843 23.5587 20.6874 22.9024 22.3046 22.9024 L 45.3905 22.9024 C 47.0080 22.9024 47.7107 23.5587 47.7107 25.2227 L 47.7107 48.2618 C 47.7107 49.9259 47.0080 50.5821 45.3905 50.5821 Z" /></svg>
                            </div>
                        </div>}
                    </TabsContent>
                    <TabsContent value="custom">

                    </TabsContent>
                </Tabs>
            </div>
        </div >
    )
}

export default BackgroundFilter