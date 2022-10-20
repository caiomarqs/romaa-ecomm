import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useContext, useState } from "react"
import { NavActions } from "../../../actions"
import { NavContext } from "../../../context"

const GeneralMenu = () => {

    const { navState } = useContext(NavContext)
    const { generalMenuIsOpen } = navState

    return (
        <Transition.Root
            show={generalMenuIsOpen}
            as={Fragment}
        >
            <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-hidden"
                onClose={NavActions.closeGeneralMenu}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="w-screen max-w-md">
                                <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                            <div className="flex items-center ml-3 h-7">
                                                <button
                                                    type="button"
                                                    className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                                                    onClick={() => { }}
                                                >
                                                    <span className="sr-only">Close panel</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <div className="flow-root">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export { GeneralMenu }