import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full flex">
            <div>LOGO</div>
            <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
                    <div />
                    <div>
                        <Link
                            href="/login"
                            className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}