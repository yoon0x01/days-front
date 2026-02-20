import { useFooterStore } from "@/store";
import { NavLink } from "react-router-dom";

export default function CommonFooter() {

    const { isShow } = useFooterStore();        // 푸터 정보
    if (!isShow) return null;

    const menus = [
        {
            to: "/",
            label: "홈",
            icon: "/img/ic_home.svg",
            activeIcon: "/img/ic_home_active.svg",
            size: "h-8",
            end: true
        },
        {
            to: "/calender",
            label: "캘린더",
            icon: "/img/ic_calender.svg",
            activeIcon: "/img/ic_calender_active.svg",
            size: "h-7.5"
        },
        {
            to: "/notifications",
            label: "알림",
            icon: "/img/ic_noti.svg",
            activeIcon: "/img/ic_noti_active.svg",
            size: "h-8"
        },
        {
            to: "/profile",
            label: "프로필",
            icon: "/img/ic_user.svg",
            activeIcon: "/img/ic_user_active.svg",
            size: "h-9"
        }
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[150] py-3 px-4 lg:px-[28px] bg-white">
            <nav className="grid grid-cols-4 gap-2 text-gray-600">
                { menus.map((menu) => (
                    <NavLink key={menu.to} to={menu.to} end={menu.end} aria-label={menu.label}
                             className={({ isActive }) =>
                                 `flex flex-col items-center justify-center text-center ${ isActive ? "text-black" : "" }`
                            }
                    >
                        {({ isActive }) => (
                            <img className={`${menu.size} mx-auto`} src={isActive ? menu.activeIcon : menu.icon} alt="" />
                        )}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}