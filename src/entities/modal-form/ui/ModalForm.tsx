import {FC} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import {ModalFormPropsInterface} from "./modal-form.types";
import {ModalFormType,ModalFormSchema} from "./modal-form.config";
import {Backdrop, Button, Divider, Fade, Modal, Stack, styled, TextField, Typography} from "@mui/material";

const Form = styled('form')`
    background: #fff;
    display: grid;
    gap: 20px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 400px;
`

export const ModalForm: FC<ModalFormPropsInterface> = ({modal, onSubmit, defaultValues, label}) => {
    const [isOpen, setIsOpen] = modal
    const {
        handleSubmit,
        register,
        reset,
        formState: {errors}
    } = useForm<ModalFormType>({
        resolver: zodResolver(ModalFormSchema),
        defaultValues
    })
    const handleClose = () => {
        reset()
        setIsOpen(!isOpen)
    }
    const submitDecorator = (callback: ModalFormPropsInterface['onSubmit']) => (formData: ModalFormType) => {
        reset()
        callback(formData)
        handleClose()
    }

    return (
        <Modal
            open={!!isOpen}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={!!isOpen}>
                <Form onSubmit={handleSubmit(submitDecorator(onSubmit))}>
                    <Typography variant='h5'>{label}</Typography>
                    <Divider />
                    <TextField
                        label="Tree name"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        {...register('name')}
                    />
                    <Divider />
                    <Stack spacing={1}>
                        <Button variant="outlined" type="button" onClick={handleClose}>Cancel</Button>
                        <Button variant="contained" type="submit">Submit</Button>
                    </Stack>
                </Form>
            </Fade>
        </Modal>
    )
}