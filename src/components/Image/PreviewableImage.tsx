import { cn } from "@/utils/cn.utils";
import Image, { ImageProps } from "next/image";

export default function PreviewableImage({className, ...props}: ImageProps){
    return(
        <Image className={cn(className, "hover:border-subtle-accent hover:border-10 transition-all ease-in duration-250 cursor-zoom-in")} {...props} />
    )
}