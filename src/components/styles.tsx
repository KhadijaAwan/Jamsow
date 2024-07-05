import { Poppins } from "next/font/google";

export const fontLight = Poppins({
    subsets: ["latin-ext"],
    weight: "300",
});

export const fontNormal = Poppins({
    subsets: ["latin-ext"],
    weight: "400",
});

export const fontMedium = Poppins({
    subsets: ["latin-ext"],
    weight: "500",
});

export const fontSemibold = Poppins({
    subsets: ["latin"],
    weight: "600",
});

export const fontBold = Poppins({
    subsets: ["latin-ext"],
    weight: "700",
});

export const linkStyle = "no-underline";

export const customButton = "w-[105px] md:w-[120px] text-center text-white tracking-widerpx-3 rounded-[10px] text-[13.5px] md:text-sm";

export const buttonStyle = "bg-black hover:bg-gray-800 text-white rounded-[10px]";