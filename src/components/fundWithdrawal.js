


import React,{ useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

// Validation schema
const validationSchema = Yup.object({
  bank: Yup.string().required("Bank is required"),
  branch: Yup.string().required("Branch is required"),
  accountName: Yup.string().required("Account name is required"),
  accountNumber: Yup.string().required("Account number is required"),
})

const initialValues = {
  bank: "Commercial Bank of Ethiopia",
  branch: "",
  accountName: "",
  accountNumber: "",
  proofFile: null,
}

export default function FundWithdrawalForm() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [fileName, setFileName] = useState("")

  const handleFileChange = (event , setFieldValue) => {
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      const file = event.currentTarget.files[0]
      setSelectedFile(file)
      setFileName(file.name)
      setFieldValue("proofFile", file)
    }
  }

  const handleSubmit = (values) => {
    console.log("Form values:", values)
  }

  return (
    <div className="bg-gray-50 max-w-[77vw] p-6 rounded-lg w-screen mx-36 mx-auto">
     
      

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ setFieldValue, errors, touched }) => (
          <Form>
            {/* Bank and Branch Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="bank" className="block text-sm font-medium text-gray-700">
                  Bank
                </label>
                <div className="relative">
                  <Field
                    as="select"
                    id="bank"
                    name="bank"
                    className={`block w-full rounded-md border ${errors.bank && touched.bank ? "border-red-500" : "border-gray-300"} bg-white py-2 pl-3 pr-10 text-gray-900 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500`}
                  >
                    <option value="Commercial Bank of Ethiopia">Commercial Bank of Ethiopia</option>
                    <option value="Dashen Bank">Dashen Bank</option>
                    <option value="Awash Bank">Awash Bank</option>
                    <option value="Bank of Abyssinia">Bank of Abyssinia</option>
                  </Field>
                  <ErrorMessage name="bank" component="div" className="text-red-500 text-xs mt-1" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                  Select Branch
                </label>
                <div className="relative">
                  <Field
                    as="select"
                    id="branch"
                    name="branch"
                    className={`block w-full rounded-md border ${errors.branch && touched.branch ? "border-red-500" : "border-gray-300"} bg-white py-2 pl-3 pr-10 text-gray-900 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500`}
                  >
                    <option value="" disabled>
                      Select Branch
                    </option>
                    <option value="Main Branch">Main Branch</option>
                    <option value="North Branch">North Branch</option>
                    <option value="East Branch">East Branch</option>
                    <option value="West Branch">West Branch</option>
                    <option value="South Branch">South Branch</option>
                  </Field>
                  <ErrorMessage name="branch" component="div" className="text-red-500 text-xs mt-1" />
                </div>
              </div>
            </div>

            {/* Account Name and Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="accountName" className="block text-sm font-medium text-gray-700">
                  Account Name
                </label>
                <Field
                  type="text"
                  id="accountName"
                  name="accountName"
                  placeholder="Enter Account Name"
                  className={`block w-full rounded-md border ${errors.accountName && touched.accountName ? "border-red-500" : "border-gray-300"} py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
                <ErrorMessage name="accountName" component="div" className="text-red-500 text-xs mt-1" />
              </div>

              <div className="space-y-2">
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                  Account Number
                </label>
                <Field
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  placeholder="Enter Account Number"
                  className={`block w-full rounded-md border ${errors.accountNumber && touched.accountNumber ? "border-red-500" : "border-gray-300"} py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
                <ErrorMessage name="accountNumber" component="div" className="text-red-500 text-xs mt-1" />
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-8">
              <label htmlFor="proofFile" className="block text-sm font-medium text-gray-700 mb-2">
                Proof of Bank Account
              </label>
              <div className="relative">
                <input
                  id="proofFile"
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, setFieldValue)}
                />
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => document.getElementById("proofFile")?.click()}
                    className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Choose File
                  </button>
                  <span className="ml-3 text-sm text-gray-500">{fileName || "No file chosen"}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

