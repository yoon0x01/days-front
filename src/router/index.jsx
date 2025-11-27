import {createBrowserRouter} from "react-router-dom";
import CommonLayout from "@/layouts/common.layout";

import Main from "@/pages/main";
import Login from "@/pages/login/index.jsx";

const router = createBrowserRouter([
    {
        element: <CommonLayout />,
        children: [
            // 메인
            { index: true, element: <Main /> },

            // 로그인
            { ptah: 'login', element: <Login /> },
        ]
    }
]);

export default router;