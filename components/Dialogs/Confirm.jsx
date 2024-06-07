import { DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
export default function Confirm({ title, description, onConfirm }) {

    return (
        <>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        <div className="text-3xl">{title}</div>
                    </DialogTitle>
                    <DialogDescription>
                        <div className="text-2xl">{description}</div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-center">
                    <DialogClose asChild>
                        <Button
                            variant="destructive"
                            onClick={onConfirm}
                        >
                            <div className="text-2xl">Да</div>
                        </Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            <div className="text-2xl">Нет</div>
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </>
    )
}