import Link from "next/link";

import { cn } from "@/lib/utils";

type Props = {
    theme?: 'light' | 'dark' | 'auto',
    variant?: 'default' | 'icon',
    size?: 'sm' | 'lg' | 'xl' | '2xl';
    href?: string;
    className?: string;
};

export function LogoLight() {

}

export function Logo({
    size,
    href,
    className,
    variant = 'default',
    theme = 'auto',
}: Props) {
    const logo = (
        <div
            className={cn(
                'font-bold text-primary',
                (() => {
                    switch (size) {
                        case 'sm':
                            return 'w-20';

                        case 'lg':
                            return 'w-40';

                        case 'xl':
                            return 'w-80';

                        case '2xl':
                            return 'w-[600px]';
                    
                        default:
                            return 'w-28'
                    }
                })(),
                className,
            )}
        >
            {variant === 'icon' ? (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="145.29" 
                    height="78.354" 
                    viewBox="0 0 145.29 78.354"
                    className="w-full h-auto"
                >
                    <g id="Group_1377" data-name="Group 1377" transform="translate(0)">
                        <path id="Path_885" data-name="Path 885" d="M80.664,59.008a6.663,6.663,0,0,1-.159-1.541c-.006-.5.022-.993.056-1.487a20.31,20.31,0,0,1,2.705-8.488A13.118,13.118,0,0,1,87.514,43a7.745,7.745,0,0,1,6.009-1.066.191.191,0,0,1,0,.368l0,0A10.833,10.833,0,0,0,88.9,44.863a18.447,18.447,0,0,0-3.181,4.1A47.879,47.879,0,0,0,83.244,53.8c-.386.839-.754,1.695-1.125,2.559-.2.43-.363.868-.554,1.306l-.267.659c-.09.213-.178.459-.24.633l-.025.07a.193.193,0,0,1-.248.114A.2.2,0,0,1,80.664,59.008Z" transform="translate(-3.081 -5.835)" fill="#2b304a"/>
                        <path id="Path_886" data-name="Path 886" d="M81.873,58.957c-.063-.175-.149-.42-.241-.633l-.267-.659c-.189-.438-.354-.876-.554-1.306-.37-.865-.739-1.72-1.123-2.559a48.218,48.218,0,0,0-2.477-4.838,18.487,18.487,0,0,0-3.18-4.1A10.833,10.833,0,0,0,69.409,42.3l0,0a.191.191,0,0,1-.13-.236.2.2,0,0,1,.135-.132A7.74,7.74,0,0,1,75.416,43a13.118,13.118,0,0,1,4.248,4.5,20.309,20.309,0,0,1,2.705,8.488c.033.493.063.989.056,1.487a6.664,6.664,0,0,1-.159,1.541.193.193,0,0,1-.368.019Z" transform="translate(-9.675 -5.835)" fill="#2b304a"/>
                        <g id="Group_1284" data-name="Group 1284" transform="translate(0 57.147)">
                            <path id="Path_887" data-name="Path 887" d="M48.5,63.117V74.659a1.605,1.605,0,1,1-3.208,0V63.491c0-3.291-2.042-5.416-5.041-5.416a5.163,5.163,0,0,0-5.333,5.416V74.659a1.605,1.605,0,1,1-3.208,0V56.784a1.61,1.61,0,0,1,1.625-1.666,1.629,1.629,0,0,1,1.584,1.666v.749a8.317,8.317,0,0,1,6.041-2.415C45.586,55.118,48.5,58.242,48.5,63.117Z" transform="translate(-31.711 -55.118)" fill="#2b304a"/>
                            <path id="Path_888" data-name="Path 888" d="M65.279,64.493V64.7a1.772,1.772,0,0,1-1.958,2H48.988a7.165,7.165,0,0,0,7.458,6.668,8.063,8.063,0,0,0,5.292-1.958,1.666,1.666,0,0,1,1.084-.459,1.378,1.378,0,0,1,1.415,1.415,1.862,1.862,0,0,1-.792,1.46,10.79,10.79,0,0,1-7.04,2.5,10.605,10.605,0,0,1-.376-21.207A8.984,8.984,0,0,1,65.279,64.493Zm-16.166-.625H61.986a5.747,5.747,0,0,0-6.041-5.833A6.918,6.918,0,0,0,49.113,63.867Z" transform="translate(-23.53 -55.118)" fill="#2b304a"/>
                            <path id="Path_889" data-name="Path 889" d="M81.9,65.7A10.625,10.625,0,1,1,71.273,55.118,10.563,10.563,0,0,1,81.9,65.7Zm-17.959.043a7.267,7.267,0,0,0,7.293,7.582,7.631,7.631,0,1,0-7.293-7.582Z" transform="translate(-14.732 -55.118)" fill="#2b304a"/>
                            <path id="Path_890" data-name="Path 890" d="M82.669,55.407H87.71a1.437,1.437,0,1,1,0,2.874H82.669V69.364c0,2.667,1.376,3.875,4.292,3.875.708,0,1.208-.084,1.666-.084a1.291,1.291,0,0,1,1.458,1.25,1.431,1.431,0,0,1-1.166,1.458,8.954,8.954,0,0,1-2.624.292c-4.418,0-6.834-2.333-6.834-6.583V58.281H77.377a1.438,1.438,0,1,1,0-2.874h2.083" transform="translate(-5.796 -54.948)" fill="#2b304a"/>
                            <path id="Path_891" data-name="Path 891" d="M98.757,56.909a1.5,1.5,0,0,1-1.625,1.5,5.984,5.984,0,0,0-6.334,6v10.25a1.605,1.605,0,1,1-3.208,0V56.784a1.611,1.611,0,0,1,1.626-1.666A1.627,1.627,0,0,1,90.8,56.784v1.5a8.145,8.145,0,0,1,6.334-2.875A1.526,1.526,0,0,1,98.757,56.909Z" transform="translate(1.076 -55.118)" fill="#2b304a"/>
                            <path id="Path_892" data-name="Path 892" d="M115.537,64.493V64.7a1.772,1.772,0,0,1-1.958,2H99.246a7.166,7.166,0,0,0,7.459,6.668A8.059,8.059,0,0,0,112,71.409a1.673,1.673,0,0,1,1.084-.459,1.379,1.379,0,0,1,1.417,1.415,1.862,1.862,0,0,1-.792,1.46,10.791,10.791,0,0,1-7.042,2.5,10.605,10.605,0,0,1-.374-21.207A8.984,8.984,0,0,1,115.537,64.493Zm-16.166-.625h12.875a5.748,5.748,0,0,0-6.041-5.833A6.921,6.921,0,0,0,99.372,63.867Z" transform="translate(5.961 -55.118)" fill="#2b304a"/>
                            <path id="Path_893" data-name="Path 893" d="M130.531,64.493V64.7a1.772,1.772,0,0,1-1.958,2H114.24a7.166,7.166,0,0,0,7.459,6.668,8.059,8.059,0,0,0,5.29-1.958,1.67,1.67,0,0,1,1.084-.459,1.379,1.379,0,0,1,1.417,1.415,1.862,1.862,0,0,1-.792,1.46,10.791,10.791,0,0,1-7.042,2.5,10.605,10.605,0,0,1-.374-21.207A8.984,8.984,0,0,1,130.531,64.493Zm-16.166-.625H127.24a5.749,5.749,0,0,0-6.041-5.833A6.919,6.919,0,0,0,114.366,63.867Z" transform="translate(14.758 -55.118)" fill="#2b304a"/>
                        </g>
                        <path id="Path_894" data-name="Path 894" d="M69.853,22.729a1.984,1.984,0,0,1,.4,1.282,1.935,1.935,0,0,1-.611,1.365,1.81,1.81,0,0,1-1.452.438,2.047,2.047,0,0,1-1.206-.592l1.142-.335a1.771,1.771,0,0,0,.719-.4A5.347,5.347,0,0,0,69.853,22.729Z" transform="translate(-11.015 -16.976)" fill="#70a487"/>
                        <path id="Path_895" data-name="Path 895" d="M70.662,26.239a11.037,11.037,0,0,1,1.073-1.157c.178-.186.308-.428.551-.5a1.653,1.653,0,0,1,.911-.008.1.1,0,0,1,.075.092,1.338,1.338,0,0,1-.309.9,1.393,1.393,0,0,1-.724.328,15.275,15.275,0,0,1-1.509.447.063.063,0,0,1-.078-.043A.069.069,0,0,1,70.662,26.239Z" transform="translate(-8.864 -15.929)" fill="#70a487"/>
                        <path id="Path_896" data-name="Path 896" d="M72.955,21.678a1.327,1.327,0,0,1-.068,1.092,1.433,1.433,0,0,1-.993.754,1.536,1.536,0,0,1-1.173-.27,1.584,1.584,0,0,1-.6-.889,9.644,9.644,0,0,0,1.549-.008A3.35,3.35,0,0,0,72.955,21.678Z" transform="translate(-9.176 -17.592)" fill="#70a487"/>
                        <path id="Path_897" data-name="Path 897" d="M81.24,26.792A13.745,13.745,0,0,0,78.51,22.63a7.648,7.648,0,0,0-4.118-2.34,7.9,7.9,0,0,0-4.6.687,10.032,10.032,0,0,0-3.757,2.717,8.985,8.985,0,0,0-1.479,8.549,7.885,7.885,0,0,0,6.184,5.476,1.318,1.318,0,0,1,1.084.982l.019.071a12.176,12.176,0,0,0,3.956,5.99,20.038,20.038,0,0,0,6.525,3.74c4.775,1.785,10.049,1.176,14.774-.8a23.673,23.673,0,0,0,6.414-4.113,20.209,20.209,0,0,0,2.585-2.78,14.245,14.245,0,0,0,1.89-3.166,5.645,5.645,0,0,0,.408-3.213,5.01,5.01,0,0,0-1.661-2.739,11.55,11.55,0,0,0-6.764-2.6l.168-.013a48.305,48.305,0,0,1-7.551.073c-1.242-.083-2.48-.187-3.713-.325l-1.845-.217a4.589,4.589,0,0,0-1.718-.027,15.026,15.026,0,0,0-6.3,3.351,11.97,11.97,0,0,0-2.417,2.707,4.6,4.6,0,0,0-.76,3.478,4.717,4.717,0,0,1,.557-3.594,12.335,12.335,0,0,1,2.306-2.937,15.473,15.473,0,0,1,6.452-3.811,6.707,6.707,0,0,1,1.956-.108l1.839.04c1.227.016,2.45,0,3.67-.036a53.618,53.618,0,0,0,7.2-.592.926.926,0,0,1,.148-.013h.021a13.292,13.292,0,0,1,8.353,2.751,7.582,7.582,0,0,1,2.658,4.022,8.228,8.228,0,0,1-.4,4.792c-2.329,5.611-7,9.549-12.25,11.917a25.592,25.592,0,0,1-8.4,2.122,20.71,20.71,0,0,1-8.649-1.25,21.868,21.868,0,0,1-7.488-4.446,14.962,14.962,0,0,1-4.646-7.6l1.1,1.054a9.839,9.839,0,0,1-5.093-2.648,10.939,10.939,0,0,1-2.842-4.857A10.542,10.542,0,0,1,69.3,19.7a9.073,9.073,0,0,1,5.3-.341,8.4,8.4,0,0,1,4.314,2.916A13.477,13.477,0,0,1,81.24,26.792Z" transform="translate(-14.001 -19.103)" fill="#70a487"/>
                    </g>
                </svg>
            ) : (
                <>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="145.29" 
                        height="78.354" 
                        viewBox="0 0 145.29 78.354"
                        className={cn(
                            'w-full h-auto',
                            theme === 'auto' ? 'dark:hidden' : (theme !== 'light' && 'hidden')
                        )}
                    >
                        <g id="Group_1377" data-name="Group 1377" transform="translate(0)">
                            <path id="Path_885" data-name="Path 885" d="M80.664,59.008a6.663,6.663,0,0,1-.159-1.541c-.006-.5.022-.993.056-1.487a20.31,20.31,0,0,1,2.705-8.488A13.118,13.118,0,0,1,87.514,43a7.745,7.745,0,0,1,6.009-1.066.191.191,0,0,1,0,.368l0,0A10.833,10.833,0,0,0,88.9,44.863a18.447,18.447,0,0,0-3.181,4.1A47.879,47.879,0,0,0,83.244,53.8c-.386.839-.754,1.695-1.125,2.559-.2.43-.363.868-.554,1.306l-.267.659c-.09.213-.178.459-.24.633l-.025.07a.193.193,0,0,1-.248.114A.2.2,0,0,1,80.664,59.008Z" transform="translate(-3.081 -5.835)" fill="#2b304a"/>
                            <path id="Path_886" data-name="Path 886" d="M81.873,58.957c-.063-.175-.149-.42-.241-.633l-.267-.659c-.189-.438-.354-.876-.554-1.306-.37-.865-.739-1.72-1.123-2.559a48.218,48.218,0,0,0-2.477-4.838,18.487,18.487,0,0,0-3.18-4.1A10.833,10.833,0,0,0,69.409,42.3l0,0a.191.191,0,0,1-.13-.236.2.2,0,0,1,.135-.132A7.74,7.74,0,0,1,75.416,43a13.118,13.118,0,0,1,4.248,4.5,20.309,20.309,0,0,1,2.705,8.488c.033.493.063.989.056,1.487a6.664,6.664,0,0,1-.159,1.541.193.193,0,0,1-.368.019Z" transform="translate(-9.675 -5.835)" fill="#2b304a"/>
                            <g id="Group_1284" data-name="Group 1284" transform="translate(0 57.147)">
                                <path id="Path_887" data-name="Path 887" d="M48.5,63.117V74.659a1.605,1.605,0,1,1-3.208,0V63.491c0-3.291-2.042-5.416-5.041-5.416a5.163,5.163,0,0,0-5.333,5.416V74.659a1.605,1.605,0,1,1-3.208,0V56.784a1.61,1.61,0,0,1,1.625-1.666,1.629,1.629,0,0,1,1.584,1.666v.749a8.317,8.317,0,0,1,6.041-2.415C45.586,55.118,48.5,58.242,48.5,63.117Z" transform="translate(-31.711 -55.118)" fill="#2b304a"/>
                                <path id="Path_888" data-name="Path 888" d="M65.279,64.493V64.7a1.772,1.772,0,0,1-1.958,2H48.988a7.165,7.165,0,0,0,7.458,6.668,8.063,8.063,0,0,0,5.292-1.958,1.666,1.666,0,0,1,1.084-.459,1.378,1.378,0,0,1,1.415,1.415,1.862,1.862,0,0,1-.792,1.46,10.79,10.79,0,0,1-7.04,2.5,10.605,10.605,0,0,1-.376-21.207A8.984,8.984,0,0,1,65.279,64.493Zm-16.166-.625H61.986a5.747,5.747,0,0,0-6.041-5.833A6.918,6.918,0,0,0,49.113,63.867Z" transform="translate(-23.53 -55.118)" fill="#2b304a"/>
                                <path id="Path_889" data-name="Path 889" d="M81.9,65.7A10.625,10.625,0,1,1,71.273,55.118,10.563,10.563,0,0,1,81.9,65.7Zm-17.959.043a7.267,7.267,0,0,0,7.293,7.582,7.631,7.631,0,1,0-7.293-7.582Z" transform="translate(-14.732 -55.118)" fill="#2b304a"/>
                                <path id="Path_890" data-name="Path 890" d="M82.669,55.407H87.71a1.437,1.437,0,1,1,0,2.874H82.669V69.364c0,2.667,1.376,3.875,4.292,3.875.708,0,1.208-.084,1.666-.084a1.291,1.291,0,0,1,1.458,1.25,1.431,1.431,0,0,1-1.166,1.458,8.954,8.954,0,0,1-2.624.292c-4.418,0-6.834-2.333-6.834-6.583V58.281H77.377a1.438,1.438,0,1,1,0-2.874h2.083" transform="translate(-5.796 -54.948)" fill="#2b304a"/>
                                <path id="Path_891" data-name="Path 891" d="M98.757,56.909a1.5,1.5,0,0,1-1.625,1.5,5.984,5.984,0,0,0-6.334,6v10.25a1.605,1.605,0,1,1-3.208,0V56.784a1.611,1.611,0,0,1,1.626-1.666A1.627,1.627,0,0,1,90.8,56.784v1.5a8.145,8.145,0,0,1,6.334-2.875A1.526,1.526,0,0,1,98.757,56.909Z" transform="translate(1.076 -55.118)" fill="#2b304a"/>
                                <path id="Path_892" data-name="Path 892" d="M115.537,64.493V64.7a1.772,1.772,0,0,1-1.958,2H99.246a7.166,7.166,0,0,0,7.459,6.668A8.059,8.059,0,0,0,112,71.409a1.673,1.673,0,0,1,1.084-.459,1.379,1.379,0,0,1,1.417,1.415,1.862,1.862,0,0,1-.792,1.46,10.791,10.791,0,0,1-7.042,2.5,10.605,10.605,0,0,1-.374-21.207A8.984,8.984,0,0,1,115.537,64.493Zm-16.166-.625h12.875a5.748,5.748,0,0,0-6.041-5.833A6.921,6.921,0,0,0,99.372,63.867Z" transform="translate(5.961 -55.118)" fill="#2b304a"/>
                                <path id="Path_893" data-name="Path 893" d="M130.531,64.493V64.7a1.772,1.772,0,0,1-1.958,2H114.24a7.166,7.166,0,0,0,7.459,6.668,8.059,8.059,0,0,0,5.29-1.958,1.67,1.67,0,0,1,1.084-.459,1.379,1.379,0,0,1,1.417,1.415,1.862,1.862,0,0,1-.792,1.46,10.791,10.791,0,0,1-7.042,2.5,10.605,10.605,0,0,1-.374-21.207A8.984,8.984,0,0,1,130.531,64.493Zm-16.166-.625H127.24a5.749,5.749,0,0,0-6.041-5.833A6.919,6.919,0,0,0,114.366,63.867Z" transform="translate(14.758 -55.118)" fill="#2b304a"/>
                            </g>
                            <path id="Path_894" data-name="Path 894" d="M69.853,22.729a1.984,1.984,0,0,1,.4,1.282,1.935,1.935,0,0,1-.611,1.365,1.81,1.81,0,0,1-1.452.438,2.047,2.047,0,0,1-1.206-.592l1.142-.335a1.771,1.771,0,0,0,.719-.4A5.347,5.347,0,0,0,69.853,22.729Z" transform="translate(-11.015 -16.976)" fill="#70a487"/>
                            <path id="Path_895" data-name="Path 895" d="M70.662,26.239a11.037,11.037,0,0,1,1.073-1.157c.178-.186.308-.428.551-.5a1.653,1.653,0,0,1,.911-.008.1.1,0,0,1,.075.092,1.338,1.338,0,0,1-.309.9,1.393,1.393,0,0,1-.724.328,15.275,15.275,0,0,1-1.509.447.063.063,0,0,1-.078-.043A.069.069,0,0,1,70.662,26.239Z" transform="translate(-8.864 -15.929)" fill="#70a487"/>
                            <path id="Path_896" data-name="Path 896" d="M72.955,21.678a1.327,1.327,0,0,1-.068,1.092,1.433,1.433,0,0,1-.993.754,1.536,1.536,0,0,1-1.173-.27,1.584,1.584,0,0,1-.6-.889,9.644,9.644,0,0,0,1.549-.008A3.35,3.35,0,0,0,72.955,21.678Z" transform="translate(-9.176 -17.592)" fill="#70a487"/>
                            <path id="Path_897" data-name="Path 897" d="M81.24,26.792A13.745,13.745,0,0,0,78.51,22.63a7.648,7.648,0,0,0-4.118-2.34,7.9,7.9,0,0,0-4.6.687,10.032,10.032,0,0,0-3.757,2.717,8.985,8.985,0,0,0-1.479,8.549,7.885,7.885,0,0,0,6.184,5.476,1.318,1.318,0,0,1,1.084.982l.019.071a12.176,12.176,0,0,0,3.956,5.99,20.038,20.038,0,0,0,6.525,3.74c4.775,1.785,10.049,1.176,14.774-.8a23.673,23.673,0,0,0,6.414-4.113,20.209,20.209,0,0,0,2.585-2.78,14.245,14.245,0,0,0,1.89-3.166,5.645,5.645,0,0,0,.408-3.213,5.01,5.01,0,0,0-1.661-2.739,11.55,11.55,0,0,0-6.764-2.6l.168-.013a48.305,48.305,0,0,1-7.551.073c-1.242-.083-2.48-.187-3.713-.325l-1.845-.217a4.589,4.589,0,0,0-1.718-.027,15.026,15.026,0,0,0-6.3,3.351,11.97,11.97,0,0,0-2.417,2.707,4.6,4.6,0,0,0-.76,3.478,4.717,4.717,0,0,1,.557-3.594,12.335,12.335,0,0,1,2.306-2.937,15.473,15.473,0,0,1,6.452-3.811,6.707,6.707,0,0,1,1.956-.108l1.839.04c1.227.016,2.45,0,3.67-.036a53.618,53.618,0,0,0,7.2-.592.926.926,0,0,1,.148-.013h.021a13.292,13.292,0,0,1,8.353,2.751,7.582,7.582,0,0,1,2.658,4.022,8.228,8.228,0,0,1-.4,4.792c-2.329,5.611-7,9.549-12.25,11.917a25.592,25.592,0,0,1-8.4,2.122,20.71,20.71,0,0,1-8.649-1.25,21.868,21.868,0,0,1-7.488-4.446,14.962,14.962,0,0,1-4.646-7.6l1.1,1.054a9.839,9.839,0,0,1-5.093-2.648,10.939,10.939,0,0,1-2.842-4.857A10.542,10.542,0,0,1,69.3,19.7a9.073,9.073,0,0,1,5.3-.341,8.4,8.4,0,0,1,4.314,2.916A13.477,13.477,0,0,1,81.24,26.792Z" transform="translate(-14.001 -19.103)" fill="#70a487"/>
                        </g>
                    </svg>

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="145.29" 
                        height="78.354" 
                        viewBox="0 0 145.29 78.354"
                        className={cn(
                            'w-full h-auto',
                            theme === 'auto' ? 'hidden dark:hidden' : (theme !== 'dark' && 'hidden')
                        )}
                    >
                        <g id="Group_1378" data-name="Group 1378" transform="translate(0)">
                            <path id="Path_885" data-name="Path 885" d="M80.664,59.008a6.663,6.663,0,0,1-.159-1.541c-.006-.5.022-.993.056-1.487a20.31,20.31,0,0,1,2.705-8.488A13.118,13.118,0,0,1,87.514,43a7.745,7.745,0,0,1,6.009-1.066.191.191,0,0,1,0,.368l0,0A10.833,10.833,0,0,0,88.9,44.863a18.447,18.447,0,0,0-3.181,4.1A47.879,47.879,0,0,0,83.244,53.8c-.386.839-.754,1.695-1.125,2.559-.2.43-.363.868-.554,1.306l-.267.659c-.09.213-.178.459-.24.633l-.025.07a.193.193,0,0,1-.248.114A.2.2,0,0,1,80.664,59.008Z" transform="translate(-3.081 -5.835)" fill="#ffffff"/>
                            <path id="Path_886" data-name="Path 886" d="M81.873,58.957c-.063-.175-.149-.42-.241-.633l-.267-.659c-.189-.438-.354-.876-.554-1.306-.37-.865-.739-1.72-1.123-2.559a48.218,48.218,0,0,0-2.477-4.838,18.487,18.487,0,0,0-3.18-4.1A10.833,10.833,0,0,0,69.409,42.3l0,0a.191.191,0,0,1-.13-.236.2.2,0,0,1,.135-.132A7.74,7.74,0,0,1,75.416,43a13.118,13.118,0,0,1,4.248,4.5,20.309,20.309,0,0,1,2.705,8.488c.033.493.063.989.056,1.487a6.664,6.664,0,0,1-.159,1.541.193.193,0,0,1-.368.019Z" transform="translate(-9.675 -5.835)" fill="#ffffff"/>
                            <g id="Group_1284" data-name="Group 1284" transform="translate(0 57.147)">
                                <path id="Path_887" data-name="Path 887" d="M48.5,63.117V74.659a1.605,1.605,0,1,1-3.208,0V63.491c0-3.291-2.042-5.416-5.041-5.416a5.163,5.163,0,0,0-5.333,5.416V74.659a1.605,1.605,0,1,1-3.208,0V56.784a1.61,1.61,0,0,1,1.625-1.666,1.629,1.629,0,0,1,1.584,1.666v.749a8.317,8.317,0,0,1,6.041-2.415C45.586,55.118,48.5,58.242,48.5,63.117Z" transform="translate(-31.711 -55.118)" fill="#ffffff"/>
                                <path id="Path_888" data-name="Path 888" d="M65.279,64.493V64.7a1.772,1.772,0,0,1-1.958,2H48.988a7.165,7.165,0,0,0,7.458,6.668,8.063,8.063,0,0,0,5.292-1.958,1.666,1.666,0,0,1,1.084-.459,1.378,1.378,0,0,1,1.415,1.415,1.862,1.862,0,0,1-.792,1.46,10.79,10.79,0,0,1-7.04,2.5,10.605,10.605,0,0,1-.376-21.207A8.984,8.984,0,0,1,65.279,64.493Zm-16.166-.625H61.986a5.747,5.747,0,0,0-6.041-5.833A6.918,6.918,0,0,0,49.113,63.867Z" transform="translate(-23.53 -55.118)" fill="#ffffff"/>
                                <path id="Path_889" data-name="Path 889" d="M81.9,65.7A10.625,10.625,0,1,1,71.273,55.118,10.563,10.563,0,0,1,81.9,65.7Zm-17.959.043a7.267,7.267,0,0,0,7.293,7.582,7.631,7.631,0,1,0-7.293-7.582Z" transform="translate(-14.732 -55.118)" fill="#ffffff"/>
                                <path id="Path_890" data-name="Path 890" d="M82.669,55.407H87.71a1.437,1.437,0,1,1,0,2.874H82.669V69.364c0,2.667,1.376,3.875,4.292,3.875.708,0,1.208-.084,1.666-.084a1.291,1.291,0,0,1,1.458,1.25,1.431,1.431,0,0,1-1.166,1.458,8.954,8.954,0,0,1-2.624.292c-4.418,0-6.834-2.333-6.834-6.583V58.281H77.377a1.438,1.438,0,1,1,0-2.874h2.083" transform="translate(-5.796 -54.948)" fill="#ffffff"/>
                                <path id="Path_891" data-name="Path 891" d="M98.757,56.909a1.5,1.5,0,0,1-1.625,1.5,5.984,5.984,0,0,0-6.334,6v10.25a1.605,1.605,0,1,1-3.208,0V56.784a1.611,1.611,0,0,1,1.626-1.666A1.627,1.627,0,0,1,90.8,56.784v1.5a8.145,8.145,0,0,1,6.334-2.875A1.526,1.526,0,0,1,98.757,56.909Z" transform="translate(1.076 -55.118)" fill="#ffffff"/>
                                <path id="Path_892" data-name="Path 892" d="M115.537,64.493V64.7a1.772,1.772,0,0,1-1.958,2H99.246a7.166,7.166,0,0,0,7.459,6.668A8.059,8.059,0,0,0,112,71.409a1.673,1.673,0,0,1,1.084-.459,1.379,1.379,0,0,1,1.417,1.415,1.862,1.862,0,0,1-.792,1.46,10.791,10.791,0,0,1-7.042,2.5,10.605,10.605,0,0,1-.374-21.207A8.984,8.984,0,0,1,115.537,64.493Zm-16.166-.625h12.875a5.748,5.748,0,0,0-6.041-5.833A6.921,6.921,0,0,0,99.372,63.867Z" transform="translate(5.961 -55.118)" fill="#ffffff"/>
                                <path id="Path_893" data-name="Path 893" d="M130.531,64.493V64.7a1.772,1.772,0,0,1-1.958,2H114.24a7.166,7.166,0,0,0,7.459,6.668,8.059,8.059,0,0,0,5.29-1.958,1.67,1.67,0,0,1,1.084-.459,1.379,1.379,0,0,1,1.417,1.415,1.862,1.862,0,0,1-.792,1.46,10.791,10.791,0,0,1-7.042,2.5,10.605,10.605,0,0,1-.374-21.207A8.984,8.984,0,0,1,130.531,64.493Zm-16.166-.625H127.24a5.749,5.749,0,0,0-6.041-5.833A6.919,6.919,0,0,0,114.366,63.867Z" transform="translate(14.758 -55.118)" fill="#ffffff"/>
                            </g>
                            <path id="Path_894" data-name="Path 894" d="M69.853,22.729a1.984,1.984,0,0,1,.4,1.282,1.935,1.935,0,0,1-.611,1.365,1.81,1.81,0,0,1-1.452.438,2.047,2.047,0,0,1-1.206-.592l1.142-.335a1.771,1.771,0,0,0,.719-.4A5.347,5.347,0,0,0,69.853,22.729Z" transform="translate(-11.015 -16.976)" fill="#ffffff"/>
                            <path id="Path_895" data-name="Path 895" d="M70.662,26.239a11.037,11.037,0,0,1,1.073-1.157c.178-.186.308-.428.551-.5a1.653,1.653,0,0,1,.911-.008.1.1,0,0,1,.075.092,1.338,1.338,0,0,1-.309.9,1.393,1.393,0,0,1-.724.328,15.275,15.275,0,0,1-1.509.447.063.063,0,0,1-.078-.043A.069.069,0,0,1,70.662,26.239Z" transform="translate(-8.864 -15.929)" fill="#ffffff"/>
                            <path id="Path_896" data-name="Path 896" d="M72.955,21.678a1.327,1.327,0,0,1-.068,1.092,1.433,1.433,0,0,1-.993.754,1.536,1.536,0,0,1-1.173-.27,1.584,1.584,0,0,1-.6-.889,9.644,9.644,0,0,0,1.549-.008A3.35,3.35,0,0,0,72.955,21.678Z" transform="translate(-9.176 -17.592)" fill="#ffffff"/>
                            <path id="Path_897" data-name="Path 897" d="M81.24,26.792A13.745,13.745,0,0,0,78.51,22.63a7.648,7.648,0,0,0-4.118-2.34,7.9,7.9,0,0,0-4.6.687,10.032,10.032,0,0,0-3.757,2.717,8.985,8.985,0,0,0-1.479,8.549,7.885,7.885,0,0,0,6.184,5.476,1.318,1.318,0,0,1,1.084.982l.019.071a12.176,12.176,0,0,0,3.956,5.99,20.038,20.038,0,0,0,6.525,3.74c4.775,1.785,10.049,1.176,14.774-.8a23.673,23.673,0,0,0,6.414-4.113,20.209,20.209,0,0,0,2.585-2.78,14.245,14.245,0,0,0,1.89-3.166,5.645,5.645,0,0,0,.408-3.213,5.01,5.01,0,0,0-1.661-2.739,11.55,11.55,0,0,0-6.764-2.6l.168-.013a48.305,48.305,0,0,1-7.551.073c-1.242-.083-2.48-.187-3.713-.325l-1.845-.217a4.589,4.589,0,0,0-1.718-.027,15.026,15.026,0,0,0-6.3,3.351,11.97,11.97,0,0,0-2.417,2.707,4.6,4.6,0,0,0-.76,3.478,4.717,4.717,0,0,1,.557-3.594,12.335,12.335,0,0,1,2.306-2.937,15.473,15.473,0,0,1,6.452-3.811,6.707,6.707,0,0,1,1.956-.108l1.839.04c1.227.016,2.45,0,3.67-.036a53.618,53.618,0,0,0,7.2-.592.926.926,0,0,1,.148-.013h.021a13.292,13.292,0,0,1,8.353,2.751,7.582,7.582,0,0,1,2.658,4.022,8.228,8.228,0,0,1-.4,4.792c-2.329,5.611-7,9.549-12.25,11.917a25.592,25.592,0,0,1-8.4,2.122,20.71,20.71,0,0,1-8.649-1.25,21.868,21.868,0,0,1-7.488-4.446,14.962,14.962,0,0,1-4.646-7.6l1.1,1.054a9.839,9.839,0,0,1-5.093-2.648,10.939,10.939,0,0,1-2.842-4.857A10.542,10.542,0,0,1,69.3,19.7a9.073,9.073,0,0,1,5.3-.341,8.4,8.4,0,0,1,4.314,2.916A13.477,13.477,0,0,1,81.24,26.792Z" transform="translate(-14.001 -19.103)" fill="#ffffff"/>
                        </g>
                    </svg>
                </>
            )}
        </div>
    );

    if (!href) return logo;

    return (
        <Link href={href}>
            {logo}
        </Link>
    );
}
