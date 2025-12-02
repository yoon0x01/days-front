import {useFooterStore} from "@/store/index.js";
import {useEffect} from "react";

export default function Login() {

    const { setFooter } = useFooterStore();                 // 푸터 정보

    useEffect(() => {
        // 푸터 정보
        setFooter({
            isShow: false
        });
    }, [setFooter]);

    return (
        <div className="min-h-screen flex items-center justify-center pt-0 lg:pt-0 pb-0 lg:pb-0">
            <div className="single-frame w-full">
                <div className="max-w-[400px] w-full pt-[60px] px-5 lg:py-[60px] mx-auto">
                    <div className="text-center mb-6 lg:mb-8">
                        <img className="inline-block h-70 lg:h-80" src="/img/days_logo.png" alt="days"/>
                    </div>
                    <div className="flex flex-col gap-6 lg:gap-8 pb-[100px]">
                        {/*<div className="flex items-center text-center justify-center w-full">*/}
                        {/*    <div className="block w-full btn btn-lg btn-fill-primary text-3xl font-bold">DAYS</div>*/}
                        {/*</div>*/}
                        <div className="text-center mt-[-50px]">
                            <div className="flex items-center justify-center w-full mb-10">
                                <span className="px-4 text-sm text-gray-500">기록은 가볍게, 하루는 더 선명하게.</span>
                            </div>
                            <div className="inline-flex justify-between items-center gap-x-8 mx-auto">
                                <button className="flex flex-col items-center gap-y-3 w-[60px] text-sm text-gray-800"
                                    onClick="fnShowPop('modal-snsError')">
                                    <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#FFDA00]">
                                        <img src="/img/ic_sns_kakao.svg" alt="Kakao" className="h-6"/>
                                    </div>
                                </button>
                                <button className="flex flex-col items-center gap-y-3 w-[60px] text-sm text-gray-800">
                                    <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#03C75A]">
                                        <img src="/img/ic_sns_naver_w.svg" alt="Naver" className="h-5.5"/>
                                    </div>
                                </button>
                                <button className="flex flex-col items-center gap-y-3 w-[60px] text-sm text-gray-800">
                                    <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#000000]">
                                        <img src="/img/ic_sns_apple.svg" alt="Apple" className="h-7 mb-1"/>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}