import React from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import H2 from "@/components/H2";

function ErrorsModal(props) {

    function DisplayErrors() {
        const errorElements = [];

        for (const field in props.errors) {
            if (Array.isArray(props.errors[field])) {
                for (const errorMessage of props.errors[field]) {
                    errorElements.push(
                        <div key={`${field}-${errorMessage}`}>
                            <span className={'font-bold'}>{field}</span> : {errorMessage}
                        </div>
                    );
                }
            }
        }

        return <div className={'mt-4'}>{errorElements}</div>;
    }

    return (
        <Modal onClose={props.close}>
            <H2>There are some errors</H2>
            <p className="text-gray-500 w-full">
                {props.description ?? "Fix this please"}
            </p>
            <div>
                <DisplayErrors />
            </div>
            <div className="mt-8 flex flex-row gap-2">
                <Button className="w-fit" type={"button"} onClick={props.close}>
                    Ok
                </Button>
            </div>
        </Modal>
    );
}

export default ErrorsModal;
