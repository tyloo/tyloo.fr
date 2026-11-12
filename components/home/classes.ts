export const focusOnDark = "focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-sun";
export const focusOnLight = "focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-ink";
export const container = "mx-auto max-w-6xl px-5 sm:px-8";

// Section titles stay on one line: each step was checked against the longest title
// ("Ma quinte flush royale", 12.7em at 100% width) and the container at that breakpoint.
export const sectionHeadingType =
  "m-0 font-display font-extrabold leading-[1.05] text-[1.625rem] [font-stretch:90%] sm:text-4xl sm:[font-stretch:110%] md:text-[2.75rem] md:[font-stretch:120%] lg:text-[3.5rem] xl:text-[4rem]";
// Centred while the page is a single column, left-aligned from 64rem.
export const sectionHeading = `${sectionHeadingType} text-center lg:text-left`;
export const subHeading = "m-0 font-display font-extrabold leading-tight text-xl sm:text-2xl sm:[font-stretch:110%]";
export const sectionIntro = "mx-auto mt-3 mb-0 max-w-[50ch] text-center sm:mt-4 lg:mx-0 lg:text-left";

// Light sections use margins, so two neighbours share one gap instead of stacking two paddings.
export const lightSection = "my-14 md:my-24 lg:my-28";
export const colouredSection = "py-14 md:py-24 lg:py-28";

export const textLink = `font-bold underline decoration-2 underline-offset-4 hover:decoration-pink ${focusOnLight}`;
