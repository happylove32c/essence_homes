import React, { useState } from 'react';

const AuthModal = ({ onClose }) => {
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white flex flex-col justify-between items-center rounded-xl w-full max-w-sm md:w-1/3 lg:w-1/3 xl:w-1/3 h-[70vh] p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-white hover:text-black text-4xl"
        >
          &times;
        </button>

        {/* Google Signup */}
        <button className="w-full border rounded-full py-2 flex items-center justify-center gap-3 font-semibold mb-6 hover:bg-gray-50">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-5 w-5"
          />
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <div className="flex-1 h-px bg-gray-200" />
          or sign up with email
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Form Fields */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded-md mb-3 text-sm"
        />
        <input
          type="password"
          placeholder="Password(6+ characters)"
          className="w-full border px-3 py-2 rounded-md mb-3 text-sm"
        />

        {/* Terms and Privacy */}
        <div className="flex items-start text-xs mb-4">
          <input
            type="checkbox"
            className="mt-1 mr-2"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <p>
            I agree with Essence Home's{' '}
            <a href="#" className="underline">
              Terms of Service
            </a>
            ,{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>{' '}
            and default{' '}
            <a href="#" className="underline">
              Notification Settings
            </a>
            .
          </p>
        </div>

        {/* Submit Button */}
        <button
          disabled={!agreed}
          className={`w-full py-3 rounded-full font-semibold text-sm ${
            agreed
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Create Account
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <b className="underline font-medium">
            Sign in
          </b>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
