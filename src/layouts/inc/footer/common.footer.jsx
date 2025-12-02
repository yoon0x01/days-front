import {useFooterStore} from "@/store/index.js";

export default function CommonFooter() {

    const { isShow } = useFooterStore();        // 푸터 정보

    return(
        isShow && (
            <>
                푸터
            </>
        )
    )
}