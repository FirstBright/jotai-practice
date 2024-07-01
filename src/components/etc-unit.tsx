import { inputValueAtom } from "@/atoms/inputvalue"
import { useAtomValue } from "jotai"

export function EtcUnit(){
    const inputValue = useAtomValue(inputValueAtom)
    return(
        <>
            <div>
                <p>기타 단위</p>
            </div>
            <div>
                <div>
                    <p>시간당 마일</p>
                    <p>{inputValue}mph</p>
                </div>
                <div>
                    <p>초당 피트</p>
                    <p>{inputValue}fps</p>
                </div>
                <div>
                    <p>노트</p>
                    <p>{inputValue}kt</p>
                </div>
            </div>
        </>
    )
}