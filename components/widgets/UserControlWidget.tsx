"use client";
import { useSession } from "next-auth/react";
import { RefObject, useEffect, useRef, useState } from "react";

const UserControlWidget = () => {
    const [isShowing, setIsShowing] = useState(false);
    const widgetRef = useRef<HTMLDivElement>(null);

    const { data: session } = useSession();

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (
                widgetRef.current &&
                !widgetRef.current.contains(event.target as Node)
            ) {
                setIsShowing(false);
            }
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);

    return (
        <div className="relative" ref={widgetRef}>
            <button onClick={() => setIsShowing((before) => !before)}>
                Click
            </button>
            {isShowing && <div className="absolute">Fuck you</div>}
        </div>
    );
};

export default UserControlWidget;
