import { inputValueAtom } from "@/atoms/inputvalue"
import { useAtomValue } from "jotai"

export function MeterUnit() {
    const inputValue = useAtomValue(inputValueAtom)
    return (
        <>
            <div>
                <p>미터단위</p>
            </div>
            <div>
                <div>
                    <p>미터 매 초</p>
                    <p>{inputValue}m/s</p>
                </div>
                <div>
                    <p>킬로미터 매 시간</p>
                    <p>{inputValue}km/h</p>
                </div>
            </div>
        </>
    )
}
