import React, { useMemo, useState } from "react";

export default class Time extends React.Component {

    render() {
        return (
            <>
                <svg width="802" height="145" viewBox="0 0 802 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_di)">
                        <rect x="4" y="26" width="78" height="88" rx="8" fill="#C4C4C4" />
                    </g>
                    <path d="M18.3114 71.576C18.3114 91.736 23.3034 107 42.5034 107C61.6074 107 66.5994 91.736 66.5994 71.576C66.5994 51.704 61.6074 36.536 42.5034 36.536C23.3034 36.536 18.3114 51.704 18.3114 71.576ZM57.9594 71.576C57.9594 86.552 56.1354 99.032 42.5034 99.032C28.7754 99.032 26.9514 86.552 26.9514 71.576C26.9514 57.176 28.7754 44.504 42.5034 44.504C56.1354 44.504 57.9594 57.176 57.9594 71.576Z" fill="black" fill-opacity="0.6" />
                    <g filter="url(#filter1_di)">
                        <rect x="86" y="26" width="78" height="88" rx="8" fill="#C4C4C4" />
                    </g>
                    <path d="M133.673 107H142.312V91.544H151.913V83.96H142.312V38.264H131.849L98.1525 84.92V91.544H133.673V107ZM108.233 83.96L134.057 47.384V83.96H108.233Z" fill="black" fill-opacity="0.6" />
                    <path d="M195.217 101.624C195.217 98.264 192.625 95.672 189.457 95.672C186.097 95.672 183.505 98.264 183.505 101.624C183.505 104.984 186.097 107.576 189.457 107.576C192.625 107.576 195.217 104.984 195.217 101.624ZM195.217 60.536C195.217 57.176 192.625 54.584 189.457 54.584C186.097 54.584 183.505 57.176 183.505 60.536C183.505 63.896 186.097 66.488 189.457 66.488C192.625 66.488 195.217 63.896 195.217 60.536Z" fill="black" fill-opacity="0.6" />
                    <path d="M406.217 101.624C406.217 98.264 403.625 95.672 400.457 95.672C397.097 95.672 394.505 98.264 394.505 101.624C394.505 104.984 397.097 107.576 400.457 107.576C403.625 107.576 406.217 104.984 406.217 101.624ZM406.217 60.536C406.217 57.176 403.625 54.584 400.457 54.584C397.097 54.584 394.505 57.176 394.505 60.536C394.505 63.896 397.097 66.488 400.457 66.488C403.625 66.488 406.217 63.896 406.217 60.536Z" fill="black" fill-opacity="0.6" />
                    <path d="M622.217 101.624C622.217 98.264 619.625 95.672 616.457 95.672C613.097 95.672 610.505 98.264 610.505 101.624C610.505 104.984 613.097 107.576 616.457 107.576C619.625 107.576 622.217 104.984 622.217 101.624ZM622.217 60.536C622.217 57.176 619.625 54.584 616.457 54.584C613.097 54.584 610.505 57.176 610.505 60.536C610.505 63.896 613.097 66.488 616.457 66.488C619.625 66.488 622.217 63.896 622.217 60.536Z" fill="black" fill-opacity="0.6" />
                    <g filter="url(#filter2_di)">
                        <rect x="214" y="26" width="78" height="88" rx="8" fill="#C4C4C4" />
                    </g>
                    <path d="M228.311 70.576C228.311 90.736 233.303 106 252.503 106C271.607 106 276.599 90.736 276.599 70.576C276.599 50.704 271.607 35.536 252.503 35.536C233.303 35.536 228.311 50.704 228.311 70.576ZM267.959 70.576C267.959 85.552 266.135 98.032 252.503 98.032C238.775 98.032 236.951 85.552 236.951 70.576C236.951 56.176 238.775 43.504 252.503 43.504C266.135 43.504 267.959 56.176 267.959 70.576Z" fill="black" fill-opacity="0.6" />
                    <g filter="url(#filter3_di)">
                        <rect x="296" y="26" width="78" height="88" rx="8" fill="#C4C4C4" />
                    </g>
                    <path d="M311.994 54.064H320.538C321.402 47.344 326.298 42.736 334.458 42.736C342.81 42.736 347.226 47.344 347.226 53.968C347.226 62.032 340.986 65.584 329.37 65.68H327.066V72.976H329.274C341.754 72.976 348.57 76.72 348.57 86.512C348.57 93.616 344.154 99.088 334.842 99.088C325.626 99.088 320.25 93.424 319.386 86.032H310.938C311.994 99.472 321.786 106.48 334.938 106.48C349.434 106.48 356.922 98.032 356.922 87.28C356.922 77.296 351.45 71.344 343.386 69.424V68.944C350.682 67.312 355.674 61.072 355.674 53.104C355.674 43.12 348.282 35.248 334.746 35.248C321.882 35.248 312.858 42.16 311.994 54.064Z" fill="black" fill-opacity="0.6" />
                    <g filter="url(#filter4_di)">
                        <rect x="426" y="26" width="78" height="88" rx="8" fill="#C4C4C4" />
                    </g>
                    <path d="M461.989 106H470.821V36.592H452.773V44.56H461.989V106Z" fill="black" fill-opacity="0.6" />
                    <g filter="url(#filter5_di)">
                        <rect x="508" y="26" width="78" height="88" rx="8" fill="#C4C4C4" />
                    </g>
                    <path d="M523.287 105.232H569.463V97.936H536.439C548.823 87.856 567.447 73.168 567.447 55.888C567.447 43.024 558.999 35.344 545.943 35.344C533.463 35.344 524.151 43.024 523.575 57.808H532.023C532.407 49.072 537.015 42.832 546.039 42.832C555.447 42.832 558.807 48.592 558.807 56.272C558.807 70.48 541.527 84.304 523.287 98.992V105.232Z" fill="black" fill-opacity="0.6" />
                    <g filter="url(#filter6_di)">
                        <rect x="638" y="26" width="78" height="88" rx="8" fill="#C4C4C4" />
                    </g>
                    <path d="M653.994 54.064H662.538C663.402 47.344 668.298 42.736 676.458 42.736C684.81 42.736 689.226 47.344 689.226 53.968C689.226 62.032 682.986 65.584 671.37 65.68H669.066V72.976H671.274C683.754 72.976 690.57 76.72 690.57 86.512C690.57 93.616 686.154 99.088 676.842 99.088C667.626 99.088 662.25 93.424 661.386 86.032H652.938C653.994 99.472 663.786 106.48 676.938 106.48C691.434 106.48 698.922 98.032 698.922 87.28C698.922 77.296 693.45 71.344 685.386 69.424V68.944C692.682 67.312 697.674 61.072 697.674 53.104C697.674 43.12 690.282 35.248 676.746 35.248C663.882 35.248 654.858 42.16 653.994 54.064Z" fill="black" fill-opacity="0.6" />
                    <g filter="url(#filter7_di)">
                        <rect x="720" y="26" width="78" height="88" rx="8" fill="#C4C4C4" />
                    </g>
                    <path d="M735.287 105.232H781.463V97.936H748.439C760.823 87.856 779.447 73.168 779.447 55.888C779.447 43.024 770.999 35.344 757.943 35.344C745.463 35.344 736.151 43.024 735.575 57.808H744.023C744.407 49.072 749.015 42.832 758.039 42.832C767.447 42.832 770.807 48.592 770.807 56.272C770.807 70.48 753.527 84.304 735.287 98.992V105.232Z" fill="black" fill-opacity="0.6" />
                    <defs>
                        <filter id="filter0_di" x="0" y="23" width="86" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
                        </filter>
                        <filter id="filter1_di" x="82" y="23" width="86" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
                        </filter>
                        <filter id="filter2_di" x="210" y="23" width="86" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
                        </filter>
                        <filter id="filter3_di" x="292" y="23" width="86" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
                        </filter>
                        <filter id="filter4_di" x="422" y="23" width="86" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
                        </filter>
                        <filter id="filter5_di" x="504" y="23" width="86" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
                        </filter>
                        <filter id="filter6_di" x="634" y="23" width="86" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
                        </filter>
                        <filter id="filter7_di" x="716" y="23" width="86" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
                        </filter>
                    </defs>
                </svg>

            </>
        )
    }

}