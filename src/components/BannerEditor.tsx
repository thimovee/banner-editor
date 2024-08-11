import Image from 'next/image'
import React, { FC, useMemo } from 'react'
import BannerSidebar from './BannerSidebar'

interface BannerEditorProps {
    searchParams: { [key: string]: string };
}

const BannerEditor: FC<BannerEditorProps> = ({ searchParams }) => {
    const width = parseInt(searchParams.width) || 1200;
    const height = parseInt(searchParams.height) || 630;
    const aspectRatio = useMemo(() => width / height, [width, height]);
    const maxContainerWidth = 850;
    const maxContainerHeight = 850;
    const calculatedWidth = aspectRatio > 1 ? maxContainerWidth : maxContainerHeight * aspectRatio;
    const calculatedHeight = aspectRatio > 1 ? maxContainerWidth / aspectRatio : maxContainerHeight;

    const solidBgColor = searchParams.solidBgColor || '#ffffff';
    const bgGradient = searchParams.gradientBgColor || '';
    const gradientDirection = searchParams.gradientDirection || 'to right';



    return (
        <section className='flex'>
            <BannerSidebar />
            <div className='relative flex-1 bg-card rounded-md max-w-fit items-center w-full justify-center m-auto p-2'>
                <div
                    className='  flex justify-center items-center overflow-hidden'
                    style={{
                        width: calculatedWidth,
                        height: calculatedHeight,
                    }}
                >
                    <Image
                        className='object-contain'
                        src={`/api/og?width=${width}&height=${height}&solidBgColor=${encodeURIComponent(solidBgColor)}&bgGradient=${encodeURIComponent(bgGradient)}&gradientDirection=${encodeURIComponent(gradientDirection)}&bgImage=${encodeURIComponent(searchParams.bgImage || '')}&title=${encodeURIComponent(searchParams.title || 'Sample Banner')}&fontSize=${parseInt(searchParams.fontSize) || 60}&fontColor=${encodeURIComponent(searchParams.fontColor || 'black')}&textAlign=${encodeURIComponent(searchParams.textAlign || 'center')}`}
                        width={width}
                        height={height}
                        alt="banner"
                    />
                </div>
            </div>
        </section>
    );
}

export default BannerEditor;
