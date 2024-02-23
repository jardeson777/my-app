import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

type ButtonProps = {
    children: ReactNode;
    variant: "solid" | "ghost";
    color: 'primary' | 'secondary';
    onPress?: () => void;
    className?: string;
}

export const Button = (input: ButtonProps) => {
    return (
        <TouchableOpacity
            className={`
                ${input.color === "primary" ? "bg-red-600" : "bg-blue-600"} 
                ${input.variant === "ghost" ? "bg-transparent" : ""}
                h-10 rounded-full flex justify-center items-center mt-10
            `}
            onPress={input.onPress}
        >
            {input.children}
        </TouchableOpacity>
    );
}
