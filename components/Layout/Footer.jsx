export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground p-2 sticky bottom-0 opacity-80">
            <div className="container mx-auto text-center text-secondary-foreground">
                <div className="text-2xl text-secondary-foreground">&copy; {new Date().getFullYear()} by AppWay</div>
            </div>
        </footer>
    );
};