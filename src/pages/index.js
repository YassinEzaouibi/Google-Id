import GoogleMap from "@/pages/googleMap";

export default function Home() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                <section aria-labelledby="details-heading">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Use you name location in the map.</p>
                        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Full name</label>
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" placeholder="ex: Driss El Mahfoudi"
                                           className="block w-full rounded-md border-0 px-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
                                <div className="mt-2">
                                    <input type="number" name="last-name" id="last-name" autoComplete="phone-number" placeholder="ex: 0601020304"
                                           className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="h-screen w-full">
                        <GoogleMap />
                    </div>
                </section>
            </div>
        </div>
    );
}