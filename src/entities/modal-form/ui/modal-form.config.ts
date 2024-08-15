import {z} from 'zod'

export const ModalFormSchema = z.object({
    name: z.string({
        invalid_type_error: "Please enter a valid name",
        required_error: "Please enter a valid name",
    }).min(1, "Name is required"),
})

export type ModalFormType = z.infer<typeof ModalFormSchema>