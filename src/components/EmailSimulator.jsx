import React, { useState } from "react";
import { Mail, X, Check } from "lucide-react";

const EmailSimulator = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('sending');
    
    
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setShowModal(false);
        setStatus(null);
        setEmail("");
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
      >
        <Mail className="h-5 w-5" />
        <span>Email Report</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative email-modal animate-fade-in">
            <button
              onClick={() => {
                if (status !== 'sending') {
                  setShowModal(false);
                  setStatus(null);
                  setEmail("");
                }
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              disabled={status === 'sending'}
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Email Report</h3>
              <p className="text-gray-500 text-sm mt-1">
                Send the report directly to the recipient's email
              </p>
            </div>
            
            {status === 'success' ? (
              <div className="text-center py-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-3">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-green-600 font-medium">Report sent successfully!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Recipient Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Enter email address"
                    disabled={status === 'sending'}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'sending' || !email}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Report"
                  )}
                </button>
                
                <p className="mt-3 text-xs text-gray-500 text-center">
                  This is a simulation. No actual emails will be sent.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EmailSimulator;