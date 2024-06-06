export default function Footer() {
    return (
        <footer className=" text-secondary-foreground p-2 sticky bottom-0">
            <div className="container mx-auto text-center text-secondary-foreground">
                <div className="text-2xl text-secondary-foreground">{new Date().getFullYear()} &copy; AppWay</div>
            </div>
        </footer>
    );
};