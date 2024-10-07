import { Dialog } from "@/components/ui/dialog";
import { useCreateWorkspaceModal } from "../store/use-create-workspcae-modal";

const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Your modal content */}
    </Dialog>
  );
};
