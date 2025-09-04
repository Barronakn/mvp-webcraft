"use client";
import { Button } from '@/components/ui/button';

export default function Cta() {
    return (
        <div className="flex items-center justify-center mt-16">
            <div className="flex flex-row w-[90%] h-[10rem] border-2 border-gray-200 rounded-2xl">
                <div className="pl-4 flex flex-col gap-2 justify-center w-[50%] h-full">
                    <h3 className="text-2xl font-bold text-shadow-orange-500">Palais Royal d'Abomey</h3>
                    <p className="text-[22px]">Ancienne résidence des rois du Dahomey, classée au patrimoine mondial de l'UNESCO.</p>
                </div>
                <div className="flex w-[50%] h-full justify-end p-4">
                    <Button className="w-[25%] h-[25%] flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-medium rounded-full hover:bg-blue-700 transition">
                        Visiter ce site
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Button>
                </div>

            </div>
        </div>
    );
}