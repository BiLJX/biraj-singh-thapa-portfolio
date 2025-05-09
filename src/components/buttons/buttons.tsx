import { cn } from "@/utils/cn.utils";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    variant?: "primary"|"secondary"|"transparent"|"accent" | "primary-outlined"|"secondary-outlined"|"accent-outlined"|"white-outlined"
}
export default function Button(props: Props){
    return (
        <button {...props} className={cn("px-6 py-2 rounded-lg text-sm text-white transition-all duration-200 cursor-pointer",{
            "bg-primary": props.variant === "primary",
            "bg-secondary": props.variant === "secondary",
            "bg-accent": props.variant === "accent",
            "border-primary border-[1px] text-primary": props.variant === "primary-outlined",
           "border-secondary border-[1px] text-secondary": props.variant === "secondary-outlined",
            "border-accent border-[1px] text-accent": props.variant === "accent-outlined",
            "border-border border-[1px] text-border hover:bg-border hover:text-text-main": props.variant === "white-outlined",
            "bg-transparent": props.variant === "transparent",
            
        } ,props.className)} />
    )
}