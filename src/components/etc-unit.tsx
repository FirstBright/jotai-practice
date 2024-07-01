import { useAtomValue } from "jotai"
import { inputValueAtom } from "@/atoms/inputvalue"
import { decimalAtom } from "@/atoms/decimal"
import { unitAtom } from "@/atoms/unit"

export function EtcUnit() {
    const inputValue = useAtomValue(inputValueAtom)
    const decimalValue = useAtomValue(decimalAtom)
    const unit = useAtomValue(unitAtom)

    const convertSpeed = (inputValue:string, unit:string) => {
        let ms, kmh, mph, fps, kt
        switch (unit) {
            case "m/s":
                ms = Number(inputValue)
                kmh = ms * 3.6
                mph = ms * 2.23694
                fps = ms * 3.28084
                kt = ms * 1.94384
                break
            case "km/h":
                kmh = Number(inputValue)
                ms = kmh / 3.6
                mph = kmh * 0.621371
                fps = kmh * 0.911344
                kt = kmh * 0.539957
                break
            case "mph":
                mph = Number(inputValue)
                ms = mph * 0.44704
                kmh = mph * 1.60934
                fps = mph * 1.46667
                kt = mph * 0.868976
                break
            case "fps":
                fps = Number(inputValue)
                ms = fps * 0.3048
                kmh = fps * 1.09728
                mph = fps * 0.681818
                kt = fps * 0.592484
                break
            case "kt":
                kt = Number(inputValue)
                ms = kt * 0.514444
                kmh = kt * 1.852
                mph = kt * 1.15078
                fps = kt * 1.68781
                break
            default:
                console.error("Invalid unit provided")
                return {
                    ms: 0,
                    kmh: 0,
                    mph: 0,
                    fps: 0,
                    kt: 0,
                }
        }

        return {
            ms: ms,
            kmh: kmh,
            mph: mph,
            fps: fps,
            kt: kt,
        }
    }

    const conversions = convertSpeed(inputValue, unit)

    return (
        <div className='flex flex-col p-1 items-center w-full'>
            <p className='text-lg font-semibold p-1 self-start'>기타 단위</p>
            <div className='flex flex-wrap justify-center gap-4 w-full'>
                <div className='flex flex-col items-start border border-dotted bg-purple-300 p-4 flex-grow'>
                    <p>시간당 마일:</p>
                    <p>{conversions.mph.toFixed(decimalValue)} mph</p>
                </div>
                <div className='flex flex-col items-start border border-dotted bg-purple-300 p-4 flex-grow'>
                    <p>초당 피트:</p>
                    <p>{conversions.fps.toFixed(decimalValue)} fps</p>
                </div>
                <div className='flex flex-col items-start border border-dotted bg-purple-300 p-4 flex-grow'>
                    <p>노트:</p>
                    <p>{conversions.kt.toFixed(decimalValue)} kt</p>
                </div>
            </div>
        </div>
    )
}
