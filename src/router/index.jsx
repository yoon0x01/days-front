import {createBrowserRouter} from "react-router-dom";
import CommonLayout from "@/layouts/common.layout";

import Login from "@/pages/login/index.jsx";
import Home from "@/pages/home/index.jsx";
import Calender from "@/pages/calender/index.jsx";
import Notifications from "@/pages/notifications/index.jsx";
import Profile from "@/pages/profile/index.jsx";
import Settings from "@/pages/settings/index.jsx";

const router = createBrowserRouter([
    {
        element: <CommonLayout />,
        children: [
            { index: true, element: <Home /> },                      // 홈
            { path: 'calender', element: <Calender /> },             // 캘린더
            { path: 'notifications', element: <Notifications /> },   // 알림
            { path: 'profile', element: <Profile /> },               // 마이페이지
            { path: 'settings', element: <Settings /> },             // 설정

            { path: 'login', element: <Login /> },                   // 로그인
        ]
    }
]);

export default router;