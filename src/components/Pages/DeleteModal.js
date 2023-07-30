import React from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import H2 from "@/components/H2";

function DeleteModal(props) {
    return (
        <Modal>
            <H2>Are you sure?</H2>
            <p className="text-gray-500 w-full">
                {props.description}
            </p>
            <div className='mt-8 flex flex-row gap-2'>
                <Button className="w-fit bg-secondary hover:bg-secondary-dark" type={"button"} onClick={props.cancel}>
                    Cancel
                </Button>
                <Button className="w-fit" type={"submit"} onClick={props.delete}>
                    Delete
                </Button>
            </div>
        </Modal>
    );
}

export default DeleteModal;
