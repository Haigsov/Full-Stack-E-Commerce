"use client";

// Global imports
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Local imports
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

const formSchema = z.object({
    name: z.string().min(1),
});

//StoreModal component that acts as a wrapper for the Modal component
export const StoreModal = () => { 
    const storeModal = useStoreModal();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        // TODO: Create store
    };

    //Return the Modal component with the title, description, isOpen, and onClose props
    return (
    <Modal
        title="Create store"
        description="Add a new store to manage products and categories"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
    >
        Future Create Store Form
    </Modal>
    );

};