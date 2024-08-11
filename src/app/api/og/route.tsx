import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        // Canvas size
        const width = searchParams.has('width') ? parseInt(searchParams.get('width')!) : 1200;
        const height = searchParams.has('height') ? parseInt(searchParams.get('height')!) : 630;

        // Background options
        const solidBgColor = searchParams.has('solidBgColor') ? searchParams.get('solidBgColor') : '#f6f6f6';
        const bgGradient = searchParams.has('bgGradient') ? searchParams.get('bgGradient') : '';
        const gradientDirection = searchParams.has('gradientDirection') ? searchParams.get('gradientDirection') : 'to right';
        const bgImage = searchParams.has('bgImage') ? searchParams.get('bgImage') : '';

        // Text options
        const title = searchParams.has('title') && searchParams.get('title') !== '' ? searchParams.get('title') : 'Hello, World!';
        const fontSize = searchParams.has('fontSize') ? parseInt(searchParams.get('fontSize')!) : 60;
        const fontColor = searchParams.has('fontColor') ? searchParams.get('fontColor') : 'black';
        const textAlign = searchParams.has('textAlign') ? searchParams.get('textAlign') : 'center';

        // Define background style
        let backgroundStyle: string = solidBgColor || '#f6f6f6';
        if (bgGradient) {
            backgroundStyle = `linear-gradient(${gradientDirection}, ${bgGradient})`;
        } else if (bgImage) {
            backgroundStyle = `url(${bgImage})`;
        }
        console.log("Started generating image");
        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        fontSize: fontSize,
                        color: fontColor || 'black',
                        background: backgroundStyle,
                        width: "100%",
                        height: "100%",
                        paddingTop: 50,
                        aspectRatio: `${width} / ${height}`,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: textAlign || 'center',
                    }}
                >
                    <p>{title}</p>
                </div>
            ),
            {
                width: width,
                height: height,
            },
        );
    } catch (e: any) {
        return new Response(e.message, { status: 500 });
    } finally {
        console.log("Finished generating image");
    }
}
