import { ChevronDown, CloudUpload, Download, Eye, Grid3X3, History, Plus, Redo, Save, Undo, ZoomIn, ZoomOut } from "lucide-react";
import { FC } from "react";

interface BannerToolbarProps {

}

const BannerToolbar: FC<BannerToolbarProps> = () => {
    return (
        <section className="absolute p-4 pl-[432px] rounded-md flex gap-8 text-white top-0 py-6 border-b w-full justify-between pr-10 items-center transform right-1/2 translate-x-1/2">
            <div className="flex gap-4 items-center">
                <CloudUpload size={24} />
                <h1 className="text-xl">Banner</h1>
                <ChevronDown size={20} />
            </div>
            <div className="flex gap-8 items-center">
                <Undo size={20} />
                <Redo size={20} />
                <ZoomOut size={20} />
                <ZoomIn size={20} />
                <Grid3X3 size={20} />
                <Eye size={20} />
                <Plus size={20} />
            </div>
            <div className="flex gap-4">
                <span className="bg-cta text-white  px-3 py-1.5 rounded-md flex gap-2 items-center"><Download size={20} />Export</span>
                <span className="border border-cta px-3 py-1.5 rounded-md flex gap-2 items-center"><History size={20} /> History
                </span>
            </div>
        </section>
    );
}

export default BannerToolbar;