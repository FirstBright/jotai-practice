import { useAtomValue } from "jotai";
import { inputValueAtom } from "@/atoms/inputvalue";
import { decimalAtom } from "@/atoms/decimal";

export function EtcUnit() {
    const inputValue = useAtomValue(inputValueAtom);
    const decimalValue = useAtomValue(decimalAtom)
    return (
        <div className='flex flex-col p-1 items-center w-full'>
            <p className='text-lg font-semibold p-1 self-start'>기타 단위</p>
            <div className='flex flex-wrap justify-center gap-4 w-full '>
                <div className='flex flex-col items-start border border-dotted bg-purple-300 p-4 flex-grow'>
                    <p>시간당 마일:</p>
                    <p>{(Number(inputValue) * 2.23694).toFixed(decimalValue)} mph</p>
                </div>
                <div className='flex flex-col items-start border border-dotted bg-purple-300 p-4 flex-grow'>
                    <p>초당 피트:</p>
                    <p>{(Number(inputValue) * 3.28084).toFixed(decimalValue)} fps</p>
                </div>
                <div className='flex flex-col items-start border border-dotted bg-purple-300 p-4 flex-grow'>
                    <p>노트:</p>
                    <p>{(Number(inputValue) * 1.94384).toFixed(decimalValue)} kt</p>
                </div>
            </div>
        </div>
    );
}