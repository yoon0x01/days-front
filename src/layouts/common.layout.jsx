import {useEffect} from "react";
import {Outlet, useLocation} from "react-router-dom";
import CommonHeader from "@/layouts/inc/header/common.header.jsx";
import CommonFooter from "@/layouts/inc/footer/common.footer.jsx";
import {useFooterStore} from "@/store/index.js";

export default function CommonLayout() {

    const location = useLocation();
    const initFooter = useFooterStore((state) => state.initFooter);


    useEffect(() => {

        // 초기화
        initFooter();
        // 스크롤 최상단으로
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

    }, [location.pathname]);

    return (
        <div>
            {/*<CommonHeader/>*/}
            <div className="min-h-screen lg:pt-0 lg:pb-0">
                <Outlet/>
                <CommonFooter/>
            </div>
        </div>
    )
}