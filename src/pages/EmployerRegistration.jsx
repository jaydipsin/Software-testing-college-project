import  { useState } from 'react';
import { Building, User, Phone, AlertCircle, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmployerRegistration = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: '',
    firstName: 'Vinit',
    lastName: 'Rajwani',
    hearAboutUs: '',
    phoneNumber: '91577-90708',
    countryCode: '+91',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({
    companyName: '',
    phoneNumber: '',
    agreeToTerms : ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
      valid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
      valid = false;
    }

    if(!formData.agreeToTerms){
      newErrors.agreeToTerms = 'Terms and conditions are required';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Form submission logic would go here
      alert('Form submitted successfully!');
      setFormData("")
      navigate("/")
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-3 rounded-full">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="ml-4 text-2xl font-bold text-gray-900">Create an employer account</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Name Field */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company name *
              </label>
              <div className="relative">
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.companyName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Add a company name"
                />
                {errors.companyName && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.companyName && (
                <p className="mt-2 text-sm text-red-600">{errors.companyName}</p>
              )}
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First name *
                </label>
                <div className="relative">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last name *
                </label>
                <div className="relative">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* How did you hear about us */}
            <div>
              <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-1">
                How did you hear about us?
              </label>
              <select
                id="hearAboutUs"
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="search-engine">Search Engine</option>
                <option value="social-media">Social Media</option>
                <option value="friend">Friend or Colleague</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone number
              </label>
              <p className="text-sm text-gray-500 mb-3">For account management communication. Not visible to jobseekers.</p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3">
                  <label htmlFor="countryCode" className="sr-only">Select country code</label>
                  <select
                    id="countryCode"
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="+91">India (+91)</option>
                    <option value="+1">USA (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+61">Australia (+61)</option>
                    <option value="+65">Singapore (+65)</option>
                  </select>
                </div>
                
                <div className="w-full md:w-2/3">
                  <div className="relative">
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                        errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  {errors.phoneNumber && (
                    <p className="mt-2 text-sm text-red-600">{errors.phoneNumber}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div>
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        id="agreeToTerms"
        name="agreeToTerms"
        type="checkbox"
        checked={formData.agreeToTerms}
        onChange={handleChange}
        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor="agreeToTerms" className="text-gray-700">
        By clicking this box and providing your telephone or wireless number, you
        agree to receive marketing and informational calls and texts from Indeed
        (including prerecorded or artificial voice messages and autodialed calls
        and texts) at the number provided. Your agreement is not required to
        obtain any product or service.
      </label>
    </div>
  </div>

  {/* Error message sits BELOW now */}
  {errors.agreeToTerms && (
    <p className="mt-2 text-sm text-red-600">{errors.agreeToTerms}</p>
  )}
</div>


            {/* Error message */}
            {(errors.companyName || errors.phoneNumber || errors.agreeToTerms) && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <p className="ml-3 text-sm text-red-700">
                    There are items above that need your attention to continue.
                  </p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
            >
              <Check className="w-5 h-5 mr-2" />
              Create Account
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmployerRegistration;