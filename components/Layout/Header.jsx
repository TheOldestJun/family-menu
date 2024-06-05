import Link from "next/link";

export default function Header({ categories }) {

    return (
        <header className="bg-secondary opacity-80 sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-1">
            <nav className="text-secondary-foreground">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <div
                        className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                    >
                        <Link href="/">Меню на неделю</Link>
                    </div>
                    <div
                        className={`mr-4 cursor-pointer py-1.5 text-4xl font-caveat`}
                    >
                        <Link href="/menu/month">Что кушали в прошлом месяце</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}