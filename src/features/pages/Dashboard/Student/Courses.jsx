import React, { Fragment, useState, useRef } from 'react'
import PageHeader from '../../../components/PageHeader'
import AddCourseModal from '../../../components/Student/AddCourseModal'
import CoursesRow from '../../../components/Student/CoursesRow'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const Courses = () => {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  return (<>
    <div>
      <PageHeader icon={'+'} onClick={() => setOpen(true)}>Courses</PageHeader>
      <div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div> */}
                        <div className="mt-3 text-center sm:mt-0 w-full sm:ml-4 sm:text-left">
                          <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-gray-900">
                            Add Courses
                          </Dialog.Title>
                          <div className="mt-2 w-[80%] mx-auto">
                            <div className="mb-2 flex items-center justify-between">
                              <p className=''>PF</p>
                              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                ADD
                              </button>
                            </div>
                            <div className="mb-2 flex items-center justify-between">
                              <p className=''>OOP</p>
                              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                ADD
                              </button>
                            </div>
                            <div className="mb-2 flex items-center justify-between">
                              <p className=''>DSA</p>
                              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                ADD
                              </button>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col w-11/12 gap-2 p-2 mt-8 md:w-8/12'>
          <CoursesRow />
          <CoursesRow />
          <CoursesRow />
          <CoursesRow />
        </div>
      </div>
    </div>

  </>
  )
}

export default Courses