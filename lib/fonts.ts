import { Anybody, Figtree } from "next/font/google";

export const anybody = Anybody({ subsets: ["latin"], axes: ["wdth"], variable: "--font-anybody" });

export const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const fontVariables = `${anybody.variable} ${figtree.variable}`;
