import {ModalFormType} from "./modal-form.config";


export interface ModalFormPropsInterface {
    onSubmit: (formData: ModalFormType) => void;
    modal: [any, (value: any) => void];
    defaultValues?: ModalFormType;
    label: string;
}