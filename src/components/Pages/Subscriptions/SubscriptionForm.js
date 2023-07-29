import H2 from "@/components/H2";
import H3 from "@/components/H3";
import BlockButton from "@/components/BlockButton";
import { frequencyEnum } from "@/enums/frequencies";
import Input from "@/components/Input";
import Button from "@/components/Button";
import React from "react";
import { API_ROUTE } from "@/api/api";

function SubscriptionForm(props) {

    function back() {
        props.back("SubscriptionForm");
    }

    return (
        <form onSubmit={props.handleFormSubmit}>
            <div className="flex flex-row justify-between mb-4">
                <H2>Complete your subscription</H2>
                <Button type={"button"} onClick={() => back()}>{"<"} Back</Button>
            </div>
            <div className="flex flex-col gap-8">
                <div>
                    <H3 className="mb-2">Frequency</H3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {props.frequencies.map(frequency => (<BlockButton
                            key={frequency}
                            onClick={() => props.setSelectedFrequency(frequency)}
                            className={props.selectedFrequency === frequency ? "border-2 border-primary" : ""}>
                            <img
                                className="h-24 w-24" src={API_ROUTE + "images/frequency/" + frequency + ".png"}
                                alt={frequencyEnum[frequency].title}
                            />
                            {frequencyEnum[frequency].title}
                        </BlockButton>))}
                        <input hidden={true} defaultValue={props.selectedFrequency} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-grow">
                    <div className="col-span-1 flex flex-col gap-4">
                        <div className="md:w-1/2">
                            <H3 className="mb-2 w-full">Title</H3>
                            <p className="text-gray-500 w-full">
                                I'm a little desc
                            </p>
                            <Input
                                className="p-3 bg-transparent border shadow-none w-full"
                                value={props.title}
                                required={true}
                                onChange={event => props.setTitle(event.target.value)}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <H3 className="mb-2 w-full">Amount</H3>
                            <p className="text-gray-500 w-full">
                                I'm a little desc
                            </p>
                            <div className="text-lg ">
                                <Input
                                    className="p-3 bg-transparent border shadow-none w-full"
                                    value={props.amount}
                                    required={true}
                                    onChange={event => props.setAmount(event.target.value)}
                                />
                                €/
                                {props.selectedFrequency ? frequencyEnum[props.selectedFrequency].title : null}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4">
                        <div className="md:w-1/2">
                            <H3 className="mb-2 w-full">Subscription date</H3>
                            <p className="text-gray-500 w-full">
                                I'm a little desc
                            </p>
                            <Input
                                type="date"
                                className="p-3 bg-transparent border shadow-none w-full"
                                value={props.subscribedAt}
                                onChange={event => props.setSubscribedAt(event.target.value)}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <H3 className="mb-2 w-full">Next payment date</H3>
                            <p className="text-gray-500 w-full">
                                I'm a little desc
                            </p>
                            <Input
                                type="date"
                                className="p-3 bg-transparent border shadow-none w-full"
                                value={props.paymentAt}
                                onChange={event => props.setPaymentAt(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <Button className="w-fit py-4 px-8 text-lg" type={"submit"}>
                    Create
                </Button>
            </div>
        </form>
    );
}

export default SubscriptionForm;
