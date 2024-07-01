import { decimalAtom } from "@/atoms/decimal"
import { inputValueAtom } from "@/atoms/inputvalue"
import { useAtomValue } from "jotai"

export function MeterUnit() {
    const inputValue = useAtomValue(inputValueAtom)
    const decimalValue = useAtomValue(decimalAtom)
    return (
        <div className='flex flex-col p-1 items-center w-full'>
            <p className='text-lg font-semibold p-1 self-start'>미터 단위</p>
            <div className='flex flex-wrap justify-center gap-4 w-full'>
                <div className='flex flex-col items-start border border-dotted bg-purple-200 p-4 flex-grow'>
                    <p>미터 매 초:</p>
                    <p>{Number(inputValue).toFixed(decimalValue)} m/s</p>
                </div>
                <div className='flex flex-col items-start border border-dotted bg-purple-200 p-4 flex-grow'>
                    <p>킬로미터 매 시간:</p>
                    <p>
                        {(Number(inputValue) * 3.6).toFixed(decimalValue)} km/h
                    </p>
                </div>
            </div>
        </div>
    )
}
