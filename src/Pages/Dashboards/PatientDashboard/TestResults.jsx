import React from 'react'
import { BsDownload } from 'react-icons/bs'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlinePendingActions } from 'react-icons/md'
import { testResults } from '../../../assets/data'
const TestResults = () => {


  return (
    <section>
      <h4 className="text-primary my-10">Your Test Results</h4>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] xl:grid-cols-4 gap-8 my-10">
        {testResults.map((result) => (
          <div
            key={result.id}
            className="bg-white card-shadow rounded-xl p-6 flex flex-col items-start justify-between gap-4"
          >
            <div>
              <h4 className="text-lg font-semibold text-darkPrimary">{result.testName}</h4>
              <p className="text-sm text-gray-500">Date: {result.date}</p>

              {result.resultSummary && (
                <p className="text-sm mt-2 text-gray-700 italic">
                  Summary: {result.resultSummary}
                </p>
              )}

              <div className="mt-2 flex items-center gap-2">
                {result.status === "Completed" ? (
                  <span className="text-green-600 font-medium text-sm flex items-center gap-1">
                    <FaCheckCircle className="text-green-500" /> Result Ready
                  </span>
                ) : (
                  <span className="text-yellow-600 font-medium text-sm flex items-center gap-1">
                    <MdOutlinePendingActions className="text-yellow-500" /> Pending
                  </span>
                )}
              </div>
            </div>

            {result.resultFile && (
              <a
                href={result.resultFile}
                download
                className="mt-2 md:mt-0 inline-flex items-center gap-2 text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-darkPrimary hover:text-white transition"
              >
                <BsDownload /> Download PDF
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestResults
